from flask import Flask, request, jsonify
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow frontend requests

# Read email credentials securely from environment
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT"))

# API endpoint to send email using SMTP
@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.get_json()

    recipient = data.get("to")
    subject = data.get("subject")
    message_body = data.get("message")

    if not recipient or not subject or not message_body:
        return jsonify({"error": "All fields are required"}), 400

    try:
        msg = EmailMessage()
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = recipient
        msg["Subject"] = subject
        msg.set_content(message_body)

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)

        return jsonify({"success": "Email sent successfully!"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)

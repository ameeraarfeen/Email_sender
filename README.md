# Email Sender App

A modern single-page web application to send emails using Flask and JavaScript.

## Features
- Flask backend with SMTP email sending
- Environment variable support for security
- Clean dark UI with glassmorphism design
- Fetch API based frontend communication

## Tech Stack
- Python (Flask)
- HTML, CSS, JavaScript
- SMTP (Gmail App Password)

📂 Project Structure
email-sender/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

⚙️ Backend Setup
1️⃣ Clone the Repository
git clone <https://github.com/ameeraarfeen/Email_sender>
cd email-sender/backend

2️⃣ Install Dependencies
pip install -r requirements.txt

3️⃣ Environment Variable Configuration

Create a .env file inside the backend folder:

EMAIL_ADDRESS=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587


⚠️ Do not commit the .env file.
Use .env.example for reference.

🔐 Gmail App Password Setup

If you are using Gmail:

Enable 2-Step Verification on your Google account

Go to Google Account → Security → App Passwords

Generate a new app password

Use this password in EMAIL_PASSWORD

▶️ Running the Backend Server
python app.py


The server will start at:

http://127.0.0.1:5000

🌐 Running the Frontend

Open frontend/index.html directly in your browser.

⚠️ Make sure the backend server is running before clicking the Send button.

🔁 API Documentation
POST /send-email
Request Body (JSON)
{
  "to": "recipient@example.com",
  "subject": "Email Subject",
  "message": "Email message content"
}

Responses

200 OK – Email sent successfully

400 Bad Request – Missing required fields

500 Internal Server Error – SMTP or server failure

🔒 Security Considerations

Email credentials are stored using environment variables

.env file is excluded via .gitignore

No sensitive information is committed to the repository

✅ Project Status

✔ Frontend completed

✔ Backend email functionality implemented

✔ Secure configuration using environment variables

✔ Ready for testing and deployment



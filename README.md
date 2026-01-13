📧 Email Sender Web App

A modern full-stack Email Sender web application built using Flask (Python) and Vanilla JavaScript.
This project demonstrates frontend–backend communication, secure credential handling, and clean UI design.

✨ Features

🚀 Send emails using SMTP

🔐 Secure credentials using environment variables

🌙 Dark mode UI with glassmorphism design

⚡ Async email sending with loading indicator

✅ Success & error notifications

🌐 CORS-enabled API

🛠 Tech Stack
Frontend

HTML5

CSS3 (Glassmorphism, Dark Theme)

Vanilla JavaScript (Fetch API)

Backend

Python

Flask

smtplib

email.message

python-dotenv

flask-cors

📁 Project Structure
email-sender-app/
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
├── .gitignore
└── README.md

⚙️ Environment Variables

Create a .env file inside the backend/ directory.

EMAIL_ADDRESS=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587


⚠️ Never commit your .env file
It is ignored using .gitignore.

🔐 Gmail App Password Setup

Enable 2-Step Verification in your Google Account

Go to Google Account → Security → App passwords

Create a password for Mail

Copy the generated password

Paste it into EMAIL_PASSWORD in .env

▶️ Run Locally
1️⃣ Clone the Repository
git clone https://github.com/ameeraarfeen/email-sender-app.git
cd email-sender-app

2️⃣ Backend Setup
cd backend
pip install -r requirements.txt
python app.py


Backend runs at:
http://127.0.0.1:5000

3️⃣ Frontend Setup

Open the file below directly in your browser:

frontend/index.html

🔁 API Endpoint
POST /send-email

Request Body

{
  "to": "receiver@example.com",
  "subject": "Hello",
  "message": "This is a test email"
}


Success Response

{
  "success": "Email sent successfully!"
}

📌 Git & Security Notes

.env is ignored via .gitignore

.env.example is included for reference

No credentials are hardcoded

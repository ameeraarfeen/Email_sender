# 📧 Email Sender Web App

A modern full-stack **Email Sender Web Application** built using **Flask (Python)** and **Vanilla JavaScript**.  
This project demonstrates frontend–backend communication, secure credential handling, and clean UI design.

---

## ✨ Features

- 🚀 Send emails using SMTP
- 🔐 Secure credentials using environment variables
- 🌙 Dark mode UI with glassmorphism design
- ⚡ Async email sending with loading indicator
- ✅ Success & error notifications
- 🌐 CORS-enabled API

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3 (Glassmorphism, Dark Theme)
- Vanilla JavaScript (Fetch API)

### Backend
- Python
- Flask
- smtplib
- email.message
- python-dotenv
- flask-cors

---

## 📁 Project Structure

```
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
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder:

```env
EMAIL_ADDRESS=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587

```

---

⚠️ Do not commit .env
It is ignored using .gitignore.

▶️ # Run Locally
# Backend
cd backend
pip install -r requirements.txt
python app.py

# Frontend

Open frontend/index.html in your browser.


# Smart Portfolio 🚀

A full-stack portfolio website built with React, Express.js, MongoDB Atlas, and JWT Authentication.

## 🌐 Live Demo

Frontend: https://smart-portfolio-jlxx.vercel.app

Backend: https://smart-portfolio-backend-kv3r.onrender.com

---

## 📌 Features

* Responsive Portfolio Website
* Contact Form
* MongoDB Atlas Database Integration
* Email Notifications with Nodemailer
* Admin Login System
* JWT Authentication
* Protected Admin Dashboard
* View Contact Messages
* Full Stack Deployment

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router DOM
* CSS
* AOS (Animate On Scroll)

### Backend

* Express.js
* Node.js
* JWT Authentication
* Bcrypt
* Nodemailer

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

smart-portfolio/

├── src/

│   ├── components/

│   ├── pages/

│   │   ├── AdminLogin.jsx

│   │   └── Dashboard.jsx

│   └── App.jsx

│

├── backend/

│   ├── models/

│   ├── server.js

│   └── .env

│

└── README.md

---

## 🔐 Authentication Flow

1. Admin enters email and password.
2. Backend verifies credentials.
3. JWT token is generated.
4. Token is stored in localStorage.
5. Protected routes require a valid JWT token.
6. Admin dashboard can access messages only after successful authentication.

---

## 📩 Contact Workflow

Visitor submits contact form

↓

Data stored in MongoDB Atlas

↓

Email notification sent using Nodemailer

↓

Admin can view messages from Dashboard

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/LogiMyth/Smart-Portfolio.git
cd Smart-Portfolio
```

### Frontend Setup

```bash
npm install
npm run dev
```

### Backend Setup

```bash
cd backend

npm install

npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string

EMAIL_USER=your_email

EMAIL_PASS=your_app_password

JWT_SECRET=your_secret_key
```

## 👨‍💻 Author

Himanshu Upadhyay

GitHub: https://github.com/LogiMyth

---

## ⭐ Future Improvements

* Delete Messages
* Mark Messages as Read
* Admin Logout
* Better Dashboard UI
* Role-Based Authentication

---

If you like this project, consider giving it a ⭐ on GitHub.

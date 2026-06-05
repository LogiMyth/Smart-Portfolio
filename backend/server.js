const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Message = require("./models/Message");
const nodemailer = require("nodemailer");
const Admin = require("./models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


const messages = [];
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected 😄"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://smart-portfolio-jlxx.vercel.app"
    ],
  })
);
app.use(express.json());

function auth(req, res, next) {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).send("Access Denied");
    }

    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.admin = verified;

    next();

  } catch (error) {
    res.status(401).send("Invalid Token");
  }
}

app.get("/", (req, res) => {
  res.send("Home Route 🚀");
});

app.get("/about", (req, res) => {
  res.send("About Route 😄");
});

app.get("/contact", (req, res) => {
  res.send("Contact Route 📩");
});

app.get("/projects", (req, res) => {
  res.send("Projects Route 💻");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "📩 New Portfolio Contact Message",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Message saved to MongoDB 😄");
    console.log("Email sent successfully 📩");

    res.send("Contact data received 📩");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving message");
  }
});
app.get("/messages", auth , async (req, res) => {
  try {
    const messages = await Message.find();

    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching messages");
  }
});
// app.get("/create-admin", async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash("vinay123", 10);

//     const admin = new Admin({
//       email: "admin@gmail.com",
//       password: hashedPassword,
//     });

//     await admin.save();

//     res.send("Admin created ✅");
//   } catch (error) {
//     console.log(error);
//     res.send("Error creating admin");
//   }
// });
app.post("/login", async (req, res) => {
  // console.log("BODY:", req.body);

  try {
    const { email, password } = req.body;

    // console.log("Email:", email);

    const admin = await Admin.findOne({ email });

    // console.log("Admin found:", admin);

    if (!admin) {
      return res.status(401).send("Invalid email");
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    // console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(401).send("Invalid password");
    }

    const token = jwt.sign(
      {
        adminId: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({ token });

  } catch (error) {
    console.log(error);
    res.status(500).send("Login failed");
  }
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
app.get("/admins", async (req, res) => {
  const admins = await Admin.find();
  res.json(admins);
});
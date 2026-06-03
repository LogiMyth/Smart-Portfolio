const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Message = require("./models/Message");
const nodemailer = require("nodemailer");


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

app.use(cors());
app.use(express.json());

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
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();

    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching messages");
  }
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
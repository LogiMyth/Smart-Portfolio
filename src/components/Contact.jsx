import { useState } from "react";

function Contact({ setRefresh }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name,
    email,
    message,
  };

  const response = await fetch(
    "https://smart-portfolio-backend-kv3r.onrender.com/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.text();

  alert(result);
  setRefresh((prev) => !prev);
  setName("");
  setEmail("");
  setMessage("");
};

  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <br /><br />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
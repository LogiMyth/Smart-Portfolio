import { useEffect, useState } from "react";

function Messages({ refresh }) {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    fetch("http://localhost:5000/messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  };

  useEffect(() => {
  fetchMessages();
}, [refresh]);

  return (
    <section>
      <h2>Messages</h2>

      {messages.map((msg, index) => (
        <div key={index}>
          <h4>{msg.name}</h4>
          <p>{msg.email}</p>
          <p>{msg.message}</p>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default Messages;
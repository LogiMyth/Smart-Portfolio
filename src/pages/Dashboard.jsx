import { useEffect, useState } from "react";

function Dashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "https://smart-portfolio-backend-kv3r.onrender.com/messages",
      {
        headers: {
          Authorization: token,
        },
      }
    );

    const data = await response.json();

    setMessages(data);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {messages.map((msg) => (
        <div key={msg._id}>
          <h3>{msg.name}</h3>
          <p>{msg.email}</p>
          <p>{msg.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
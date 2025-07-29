import React, { useEffect, useState } from "react";
import axios from "../../services/api";
import { Trash2 } from "lucide-react";

const ContactDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("/contact/contact");
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to load messages", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;
    try {
      await axios.delete(`/contact/contact/${id}`);
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (err) {
      alert("Failed to delete");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className="border rounded p-4 flex justify-between"
            >
              <div>
                <p>
                  <strong>{msg.name}</strong> ({msg.email})
                </p>
                <p>{msg.message}</p>
                <small className="text-gray-500">{msg.submitted_at}</small>
              </div>
              <button
                onClick={() => deleteMessage(msg.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactDashboard;

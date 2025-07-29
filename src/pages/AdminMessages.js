import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../features/contact/contactSlice";
import "./AdminMessages.css";

const AdminMessages = () => {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div className="admin-messages-container">
      <h2>Inbox - Contact Messages</h2>

      {loading && <p>Loading messages...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="message-list">
          {messages.map((msg) => (
            <div key={msg.id} className="message-card">
              <h4>{msg.name}</h4>
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p>
                <strong>Phone:</strong> {msg.phone}
              </p>
              <p>
                <strong>Message:</strong> {msg.message}
              </p>
              <p className="timestamp">{msg.created_at}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;

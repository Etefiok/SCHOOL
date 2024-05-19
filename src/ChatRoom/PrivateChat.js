// PrivateChat.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PrivateChat({ userId, username, receiverId }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchPrivateMessages();
  }, [userId, receiverId]);

  const fetchPrivateMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/auth/private-messages/${userId}/${receiverId}`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching private messages:', error);
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageSend = async () => {
    if (message.trim() !== '') {
      try {
        await axios.post('http://localhost:5000/auth/private-messages', {
          content: message,
          senderId: userId,
          receiverId: receiverId,
        });
        setMessage('');
        fetchPrivateMessages();
      } catch (error) {
        console.error('Error sending private message:', error);
      }
    }
  };

  return (
    <div>
      <h3>Private Chat with {username}</h3>
      <div className="private-chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.senderId === userId ? 'sent' : 'received'}`}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className="private-chat-input">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
}

export default PrivateChat;

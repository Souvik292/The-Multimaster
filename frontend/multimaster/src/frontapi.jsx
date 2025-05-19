// ChatBot.js
import React, { useState } from 'react';

const Frontapi = () => {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = async () => {
    const userMsg = { sender: 'user', text: input };
    setChatLog([...chatLog, userMsg]);
    setInput('');

    const res = await fetch('http://localhost:4000/api/get-Review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { sender: 'bot', text: data.reply };
    setChatLog((prev) => [...prev, botMsg]);
  };

  return (
    <div>
      <h2>Gemini Chatbot</h2>
      <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {chatLog.map((msg, i) => (
          <p key={i}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Frontapi;

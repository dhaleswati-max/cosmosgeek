import React from 'react'
import Chatboaticon from './Chatboaticon';

function ChatMessage({ chat }) {
  return (
    
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}>
      {chat.role === "model" && <Chatboaticon />}
      <p className="message-text">{chat.text}</p>
    </div>
    
  );
}

export default ChatMessage;

import React from 'react'
import { useRef } from 'react';


function Chatform({ chatHistory, setchatHistory, generateBotResponse }) {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        // Add user message to history
        setchatHistory(prev => [...prev, { role: "user", text: userMessage }]);

        setTimeout(() => {
            // Add thinking indicator
            setchatHistory(prev => [...prev, { role: "model", text: "Thinking..." }]);

            // Generate response using the updated history
            setchatHistory(currentHistory => {
                // Filter out thinking indicator and prepend instructions to the latest user message
                const historyForApi = currentHistory
                    .filter(msg => msg.text !== "Thinking...")
                    .map((msg, index, array) => {
                        if (index === array.length - 1 && msg.role === "user") {
                            return {
                                ...msg,
                                text: `Using the details provided above, please address this query: ${userMessage}`
                            };
                        }
                        return msg;
                    });

                generateBotResponse(historyForApi);
                return currentHistory;
            });
        }, 600);
    };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text"  placeholder="message..." className="message-input"  required/>
            
            <button className="material-symbols-rounded"> arrow_upward</button>
            </form>
  )
}

export default Chatform
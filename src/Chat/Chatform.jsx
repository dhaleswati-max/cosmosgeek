import React from 'react'
import { useRef } from 'react';


function Chatform({ chatHistory,setchatHistory ,generateBotResponce}) {
    const inputRef=useRef();

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const userMessage=inputRef.current.value.trim();
        if(!userMessage)return;
        inputRef.current.value="";
        
        //update chat hitory with user message
      setchatHistory((history) =>[...history,{role:"user", text:userMessage}]);

      //Add a thining placeholder for there re
     setTimeout(() => {
  setchatHistory(history => [
    ...history,
    { role: "model", text: "Thinking..." }
  ]);

  generateBotResponce([
    ...chatHistory,
    { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }
  ]);
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
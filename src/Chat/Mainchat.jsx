import React, { useState,useRef, useEffect } from 'react'
import Chatboaticon from './Chatboaticon'
import Chatform from './Chatform'
import ChatMessage from './ChatMessage';
import axios from "axios";





function Mainchat() {
const [chatHistory, setchatHistory] = useState([]);
const [showChatbot, setshowChatbot] = useState(false);
const chatBodyRef = useRef();

const generateBotResponce = async (history) => {
  const updateHistory = (text, isError = false) => {
    setchatHistory(prev => [
      ...prev.filter(msg => msg.text !== "Thinking..."),
      { role: "model", text, isError }
    ]);
  };

  const formattedHistory = history.map(({ role, text }) => ({
    role: role === "model" ? "model" : "user",
    parts: [{ text }],
  }));

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}`,
      {
        contents: formattedHistory,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn’t generate a response.";

    updateHistory(reply);
  } catch (error) {
    updateHistory(error.response?.data?.error?.message || error.message, true);
  }
};
//use useref and effect for automatic scrooll
useEffect(() => {
chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"})
},[chatHistory]);

  return (
    <>
     
        <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button onClick={()=> setshowChatbot(prev => !prev)} id="chatbot-toggler">
        <span className='material-symbols-rounded'>mode_comment</span>
        <span className='material-symbols-rounded'>close</span>
      </button>

      <div className='chatbot-popup'>
        <div className='chat-header'>
          
            <div className="header-info">
            <Chatboaticon/>
           <h2 className='logo-text'>ChatBot</h2>

           
         </div>
          <button onClick={()=> setshowChatbot(prev => !prev)} id="chatbot-toggler" className='material-symbols-rounded'> keyboard_arrow_down</button>
          </div> 
          {/**Chatbody */}
          <div ref={chatBodyRef} className='chat-body'>
        <div className='message bot-message'>
          <Chatboaticon/>
          <p className='message-text'>Hey there ,How can i Help you today</p>

        </div>
        
        {chatHistory.map((chat,index)=>(
          <ChatMessage key ={index} chat={chat}/>
        ))}
       
          </div>
          
          {/**Chatbody-footer */}
          <div className="chat-footer">
            <Chatform chatHistory={chatHistory} setchatHistory={setchatHistory} generateBotResponce={generateBotResponce}/>
          </div>
        </div>
      </div>
     

     </>
   
  )
}

export default Mainchat;

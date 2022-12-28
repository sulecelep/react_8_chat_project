import React from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
import { sendMessage } from '../socketApi';
import { useChat } from '../context/ChatContext';


function ChatForm() {
  const [message, setMessage] = useState("");
  const {setMessages}=useChat();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessages((prevState)=>[...prevState,{message}]); //prevState yazarak önceki mesajları koruduk
    sendMessage(message); //mesajı sendMessage fonk. üzerinden liste gönderiyoruz -sunucu üzerinden
    setMessage("");
  }

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input className={styles.textInput}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={"message..."}
        />
      </form>

    </div>
  )
}

export default ChatForm
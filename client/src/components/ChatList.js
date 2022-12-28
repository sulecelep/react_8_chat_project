import React from 'react'
import styles from './styles.module.css'
import { useChat } from '../context/ChatContext'
import ChatItem from './ChatItem';

function ChatList() {
  // const data=useChat();
  // console.log(data);
  const { messages } = useChat();
  console.log(messages);


  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((item,key) => (
          <ChatItem key={key} item={item} />

        ))}
        {/* map deger.map((item,key)=>(<component key item/>))
        
        context üzerinden gelen mesajlar ChatItem da stillendirilip liste aktarıldı 
        listte de map ile çözümlenip listelendi

        */}
      </div>
        
    </div>
  )
}

export default ChatList
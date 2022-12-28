import React from 'react'
import styles from './styles.module.css'

function ChatItem({item}) {
  return (
    <div className={`${styles.chatItem}`}>
        {item.message}

    </div>
  )
}
//alınan bütün mesajları chat item componentinde ortak stillendirip liste gönderiyoruz
export default ChatItem
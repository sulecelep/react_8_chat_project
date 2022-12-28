//burada mesajlar listelenecek
import { createContext, useContext, useState } from 'react'

//context yapısı react component yapısındaki ardışıl sistemi çözümlemek için
//kolaylık sağlar. ÖRN; 1-2-3-4-5  1 nolu componenttten 5 nolu componente data akışı sağlamak için normal 
//durumda 1-2-3-4 yolunusırayla izlemeliyiz
//Context kullanarak harici komponent mantığıyla 1-c-5 yoluyla doğrudan 1 nolu componentten
//c aracılığıyla 5 noya data aktarılır.


//Providerlar contextlerle ilgili sağlayıcı yapılardır
//datalar provider arasına gömülerek aktarılır 

const ChatContext = createContext();
export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([{message:'Selam'},{message:'Merhaba'}]);
    const values={
        messages,
        setMessages,
    };

    return <ChatContext.Provider value={values}> {children} </ChatContext.Provider>
};
export const useChat=()=>useContext(ChatContext);
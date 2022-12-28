import io from "socket.io-client";
import ChatForm from "./components/ChatForm";
import ChatList from "./components/ChatList";

let socket;

//bağlantı sağlıyoruz 
export const init=()=>{
 socket=io("http://localhost:3000",{transports:["websocket"],});
 socket.on("connect",()=>console.log("Bağlantı sağlandı!"));
};

//mesajların iletilmesi
export const sendMessage=(message)=>{
    if(socket) socket.emit("new-message",message);
    //eğer socket bağlantısı varsa mesaj gönder
    //o andaki mesajı emit ile new-message kanalından gönderiyoruz
}

export const subscribeChat=(cb)=>{
    if(!socket) return;
    socket.on("receive-message",(message)=>{
        console.log("yeni mesaj var",message);
        cb(message);
    });
    //eğer mesaj yoksa bir şey dönmüyor ancak yeni mesaj varsa
    //receive-message kanalı üzerinden mesaj gönderilir tüm kullanıcılara 
    //subscribeChat edilir console da yeni mesaj var yazar
}



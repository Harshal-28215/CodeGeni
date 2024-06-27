import React, { useState } from "react";
import CodeGeni from "./Codegeni";

const CodeGeniState = (props) => {

    const [toggleLogin, settoggleLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    const [chatsection, setChatsection] = useState()
    const [chatsectionId, setChatsectionId] = useState()
    const [chatdata, setChatdata] = useState()
    const [email, setemail] = useState()
    
    console.log(email);
    
    const createchat = async(email,datas,messages,chatsectionid)=>{
        
        const response = await fetch(`http://localhost:5000/api/user/createchat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email,datas,messages,chatsectionid }),
        })
        .then(response => response.json())
        .then(data => setChatsectionId(data.chat.chatsection))

    }

    const getchatdata = async(chatid)=>{
        
        const response = await fetch(`http://localhost:5000/api/user/chatwithid/${chatid}`, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => setChatdata(data.chat))

        getchatsection(email)


    }

    const getchatsection = async(email)=>{
        
        const response = await fetch(`http://localhost:5000/api/chatsection/getchatsection`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => setChatsection(data.chatSection))
    }

    return (
        <CodeGeni.Provider value={{toggleLogin, settoggleLogin, loading, setLoading, createchat, getchatdata ,getchatsection ,chatsection ,chatsectionId, setChatsectionId, chatdata, email, setemail}}>
            {props.children}
        </CodeGeni.Provider>
    )
}

export default CodeGeniState;
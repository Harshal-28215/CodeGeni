import React, { useContext, useEffect, useState } from 'react'
import codeGeni from '../context/Codegeni';

const SidebarData = ({chatlist}) => {

    const context = useContext(codeGeni);
    const {getchatdata, setChatsectionId} = context;

    const [chatName, setChatName] = useState([])

    const getchatname = async()=>{
        
        const response = await fetch(`http://localhost:5000/api/user/chatwithid/${chatlist._id}`, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => setChatName(data.chat[0].messages))
    }

const handleclick =()=>{
    getchatdata(chatlist._id)
    setChatsectionId(chatlist._id)
}

useEffect(() => {
  getchatname()
}, [])

    

    return (
        <div className="chat" onClick={handleclick}>
            <p>{chatName}</p>
        </div>
    )
}

export default SidebarData

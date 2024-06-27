import React, { useContext, useEffect, useState } from 'react'
import codeGeni from '../context/Codegeni'
import { useRef } from 'react';

const Search = ({ output, Sendtosearch }) => {
    const context = useContext(codeGeni);
    const { setLoading, getchatdata, chatsectionId } = context;

    const [Input, setInput] = useState({ messagedata: "" })

    const { messagedata } = Input;

    const onSubmit = async (message) => {

        setLoading(true)

        const response = await fetch(`http://localhost:5000/api/chatbot/input`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message }),
        })
        .then(response => response.json())
        .then(data => { output(data) })        

            setLoading(false)
    }


    const onChange = (e) => {
        setInput({ ...Input, [e.target.name]: e.target.value });
    }


    useEffect(() => {
        if (Sendtosearch) {
            onSubmit(Sendtosearch);
        }
    }, [Sendtosearch])

    useEffect(() => {
        if (chatsectionId) {
            getchatdata(chatsectionId)
        }
    }, [chatsectionId])
    
    const ref = useRef()

    const handlesubmit = (e) => {
        e.preventDefault();
        onSubmit(messagedata)
        setInput({ messagedata: "" })
        ref.current.value = ''
    }


    return (
        <div className='search-styled'>
            <form onSubmit={handlesubmit}>
                <div>
                    <input ref={ref} autoFocus name='messagedata' type="text" placeholder='Enter a prompt here' onChange={onChange} />
                    <div className="send" onClick={handlesubmit}>
                        <ion-icon name="arrow-up-outline"></ion-icon>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from '../components/Sidebar';
import codeGeni from '../context/Codegeni';
import Lottie from 'react-lottie';
import preloader from '../images/running.json'
import Data from '../components/Data';

const Home = () => {

    const context = useContext(codeGeni);
    const { loading,createchat,chatsectionId, chatdata,getchatdata} = context;

    const { user } = useAuth0();

    const [data, setdata] = useState()
    const [message, setmessage] = useState();
    const [messages, setMessages] = useState([]);
    const [datas, setdatas] = useState([]);
    const [Sendtosearch, setSendtosearch] = useState()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: preloader,
        renderer: 'svg'
    }

    const Send = (data) => {
        setSendtosearch(data)
    }

    const output = (output) => {

        const newData = data + output.data + '\n';
        const newMessage = message + output.message + '\n';

        setdata(newData);
        setmessage(newMessage);

        // Create a new message container and add it to the state
        const newMessageContainer = (
            <div key={messages.length}>
                <p>{output.message}</p>
            </div>
        );
        setMessages(prevMessages => [...prevMessages, newMessageContainer]);

        const newdataContainer = (
            <div key={datas.length}>
                <p>{output.data}</p>
            </div>
        );
        setdatas(prevdatas => [...prevdatas, newdataContainer]);
    };

    // const [lines, setLines] = useState([]);

    // useEffect(() => {
    //     const interval = 5;

    //     const linesArray = data?.split('\n').map(line => {
    //         const chars = line.split('');
    //         return { chars, printed: '' };
    //     });

    //     let timer;
    //     let currentLineIndex = 0;
    //     let currentCharIndex = 0;

    //     const printNextChar = () => {
    //         if (currentLineIndex < linesArray?.length) {
    //             const currentLine = linesArray[currentLineIndex];
    //             if (currentCharIndex < currentLine.chars.length) {
    //                 currentLine.printed += currentLine.chars[currentCharIndex];
    //                 setLines([...linesArray]);
    //                 currentCharIndex++;
    //             } else {
    //                 currentLineIndex++;
    //                 currentCharIndex = 0;
    //             }
    //             timer = setTimeout(printNextChar, interval);
    //         }
    //     };

    //     printNextChar();

    //     return () => clearTimeout(timer);
    // }, [chatdata]);

    
    

    useEffect(() => {
        if (data) {
            let email = user?.email;
            let Datas = datas.map(data => data.props.children.props.children);
            let Messages = messages.map(message => message.props.children.props.children);
            let currentdata = Datas[Datas.length-1]
            let currentmessage = Messages[Messages.length-1]
            let chatsectionid = chatsectionId

            createchat(email, currentdata, currentmessage, chatsectionid);
            getchatdata(chatsectionId)

        }
    }, [data, datas, messages]);
    

    const copyText = (index, id) => {
        const textToCopy = datas[index]?.props.children.props.children;
        navigator.clipboard.writeText(textToCopy)
        const element = document.getElementById(id);
        console.log(element);
    };


    return (
        <>
            <div className='app-styled'>

                <Sidebar />

                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div className='home-styled'>
                    <Navbar />

                    {loading ?
                        <div>
                            <Lottie
                                options={defaultOptions}
                                height={200}
                                width={200}
                            />
                        </div> :
                        <div className='content has-scrollbar' style={chatdata ? { display: 'flex', overflow: 'hidden', width: '100%', overflowY: 'auto', alignItems: 'center', height: '69vh', flexDirection: 'column' } : { display: 'block' }}>
                            {chatdata?
                                chatdata?.map((details, index) => (
                                    <Data message={details} index={index} key={details._id} user={user} copyText={copyText} datas={datas}/>
                                )) :
                                <>
                                    <div className='title'>
                                        <h1>Hello {user?.name}</h1>
                                        <h2>How can i help you today?</h2>
                                    </div>
                                    <div className='grid'>
                                        <div className='item' onClick={() => { Send('DFS fundamental graph traversal algorithm in java') }}>
                                            <p>DFS fundamental graph traversal algorithm</p>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M28.1875,0c2.75,6.36328 -9.85937,10.29297 -11.03125,15.59375c-1.07422,4.87109 7.49219,10.53125 7.5,10.53125c-1.30078,-2.01562 -2.25781,-3.67578 -3.5625,-6.8125c-2.20703,-5.30469 13.44141,-10.10547 7.09375,-19.3125zM36.5625,8.8125c0,0 -11.0625,0.71094 -11.625,7.78125c-0.25,3.14844 2.91016,4.80469 3,7.09375c0.07422,1.87109 -1.875,3.4375 -1.875,3.4375c0,0 3.54688,-0.67578 4.65625,-3.53125c1.23047,-3.16797 -2.39844,-5.30859 -2.03125,-7.84375c0.35156,-2.42578 7.875,-6.9375 7.875,-6.9375zM19.1875,25.15625c0,0 -10.125,-0.14453 -10.125,2.71875c0,2.99219 13.25391,3.21484 22.71875,1.375c0,0 2.51563,-1.73047 3.1875,-2.375c-6.20312,1.26563 -20.34375,1.40625 -20.34375,0.3125c0,-1.00781 4.5625,-2.03125 4.5625,-2.03125zM38.65625,25.15625c-0.99219,0.07813 -2.0625,0.46094 -3.03125,1.15625c2.28125,-0.49219 4.21875,0.92188 4.21875,2.53125c0,3.625 -5.25,7.03125 -5.25,7.03125c0,0 8.125,-0.92187 8.125,-6.875c0,-2.70312 -1.87891,-4.01562 -4.0625,-3.84375zM16.75,30.71875c-1.55469,0 -3.875,1.21875 -3.875,2.375c0,2.32422 11.6875,4.11328 20.34375,0.71875l-3,-1.84375c-5.86719,1.87891 -16.67187,1.26563 -13.46875,-1.25zM18.1875,35.9375c-2.12891,0 -3.53125,1.28516 -3.53125,2.25c0,2.98438 12.71484,3.28516 17.75,0.25l-3.1875,-2.03125c-3.76172,1.58984 -13.20312,1.83203 -11.03125,-0.46875zM11.09375,38.625c-3.46875,-0.07031 -5.71875,1.48828 -5.71875,2.78125c0,6.875 35.5,6.55859 35.5,-0.46875c0,-1.16797 -1.34766,-1.73437 -1.84375,-2c2.90234,6.71875 -29.0625,6.18359 -29.0625,2.21875c0,-0.90234 2.35156,-1.76562 4.53125,-1.34375l-1.84375,-1.0625c-0.54297,-0.08203 -1.06641,-0.11328 -1.5625,-0.125zM44.625,43.25c-5.39844,5.11719 -19.07812,6.97266 -32.84375,3.8125c13.76172,5.63281 32.77734,2.47266 32.84375,-3.8125z"></path></g></g>
                                            </svg></span>
                                        </div>
                                        <div className='item' onClick={() => { Send(`Find shortest path using Dijkstra's algorithm in python`) }}>
                                            <p>Find shortest path using Dijkstra's algorithm</p>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-4.05859,0 -6.8125,0.96875 -8.5625,2.375c-1.75,1.40625 -2.4375,3.21484 -2.4375,4.71875v4.90625h10v1h-14.90625c-1.82812,0 -3.68359,0.79297 -5,2.46875c-1.31641,1.67578 -2.09375,4.17578 -2.09375,7.53125c0,3.35547 0.77734,5.85547 2.09375,7.53125c1.31641,1.67578 3.17188,2.46875 5,2.46875h4.90625v5.90625c0,1.50391 0.6875,3.3125 2.4375,4.71875c1.75,1.40625 4.50391,2.375 8.5625,2.375c4.05859,0 6.8125,-0.96875 8.5625,-2.375c1.75,-1.40625 2.4375,-3.21484 2.4375,-4.71875v-4.90625h-10v-1h14.90625c1.82813,0 3.68359,-0.79297 5,-2.46875c1.31641,-1.67578 2.09375,-4.17578 2.09375,-7.53125c0,-3.35547 -0.77734,-5.85547 -2.09375,-7.53125c-1.31641,-1.67578 -3.17187,-2.46875 -5,-2.46875h-4.90625v-5.90625c0,-1.54297 -0.68359,-3.35547 -2.4375,-4.75c-1.75391,-1.39453 -4.50781,-2.34375 -8.5625,-2.34375zM25,4c3.74609,0 6.01563,0.875 7.3125,1.90625c1.29688,1.03125 1.6875,2.23047 1.6875,3.1875v11.90625c0,1.65625 -1.34375,3 -3,3h-12c-2.05859,0 -3.83203,1.26953 -4.59375,3.0625c-0.12891,0.29688 -0.24609,0.61328 -0.3125,0.9375c-0.06641,0.32422 -0.09375,0.65625 -0.09375,1v4h-4.90625c-1.26953,0 -2.44531,-0.49609 -3.40625,-1.71875c-0.96094,-1.22266 -1.6875,-3.23828 -1.6875,-6.28125c0,-3.04297 0.72656,-5.05859 1.6875,-6.28125c0.96094,-1.22266 2.13672,-1.71875 3.40625,-1.71875h16.90625v-5h-10v-2.90625c0,-0.89453 0.38672,-2.11328 1.6875,-3.15625c1.30078,-1.04297 3.57031,-1.9375 7.3125,-1.9375zM20,7c-1.10156,0 -2,0.89844 -2,2c0,1.10156 0.89844,2 2,2c1.10156,0 2,-0.89844 2,-2c0,-1.10156 -0.89844,-2 -2,-2zM36,17h4.90625c1.26953,0 2.44531,0.49609 3.40625,1.71875c0.96094,1.22266 1.6875,3.23828 1.6875,6.28125c0,3.04297 -0.72656,5.05859 -1.6875,6.28125c-0.96094,1.22266 -2.13672,1.71875 -3.40625,1.71875h-16.90625v5h10v2.90625c0,0.89453 -0.38672,2.11328 -1.6875,3.15625c-1.30078,1.04297 -3.57031,1.9375 -7.3125,1.9375c-3.74219,0 -6.01172,-0.89453 -7.3125,-1.9375c-1.30078,-1.04297 -1.6875,-2.26172 -1.6875,-3.15625v-11.90625c0,-0.20703 0.02344,-0.39844 0.0625,-0.59375c0.28125,-1.36719 1.48828,-2.40625 2.9375,-2.40625h12c2.74609,0 5,-2.25391 5,-5zM30,39c-1.10156,0 -2,0.89844 -2,2c0,1.10156 0.89844,2 2,2c1.10156,0 2,-0.89844 2,-2c0,-1.10156 -0.89844,-2 -2,-2z"></path></g></g>
                                            </svg></span>
                                        </div>
                                        <div className='item' onClick={() => { Send('Merge Sort algorithm in javascript in javascript') }}>
                                            <p>Merge Sort algorithm</p>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M6.66797,4c-1.46094,0 -2.66797,1.20703 -2.66797,2.66797v36.66406c0,1.46094 1.20703,2.66797 2.66797,2.66797h36.66406c1.46094,0 2.66797,-1.20312 2.66797,-2.66797v-36.66406c0,-1.46094 -1.20312,-2.66797 -2.66797,-2.66797zM6.66797,6h36.66406c0.37109,0 0.66797,0.29688 0.66797,0.66797v36.66406c0,0.37109 -0.29687,0.66797 -0.66797,0.66797h-36.66406c-0.37109,0 -0.66797,-0.29687 -0.66797,-0.66797v-36.66406c0,-0.37109 0.29688,-0.66797 0.66797,-0.66797zM23,23v12.57422c0,1.92969 -0.73047,2.42578 -2,2.42578c-1.32812,0 -2.25,-0.82812 -2.85937,-1.90234l-3.14062,1.90234c0.91016,1.92578 3.14063,4 6.23438,4c3.42188,0 5.76563,-1.82031 5.76563,-5.81641v-13.18359zM35.45313,23c-3.40625,0 -5.58984,2.17969 -5.58984,5.04297c0,3.10547 1.83203,4.57422 4.58594,5.74609l0.95313,0.41016c1.73828,0.76172 2.59766,1.22656 2.59766,2.53516c0,1.08984 -0.82812,1.87891 -2.41016,1.87891c-1.88281,0 -2.77344,-1.27734 -3.58984,-2.61328l-3,2c1.12109,2.21484 3.13281,4 6.67578,4c3.625,0 6.32422,-1.88281 6.32422,-5.31641c0,-3.1875 -1.82812,-4.60547 -5.07422,-5.99609l-0.95312,-0.40625c-1.63672,-0.71094 -2.34766,-1.17187 -2.34766,-2.31641c0,-0.92578 0.71094,-1.63672 1.82813,-1.63672c1.09766,0 1.80078,0.46484 2.45313,1.63672l2.97266,-1.90625c-1.25391,-2.21484 -3,-3.05859 -5.42578,-3.05859z"></path></g></g>
                                            </svg></span>
                                        </div>
                                        <div className='item' onClick={() => { Send('Breadth-First Search (BFS) in swift') }}>
                                            <p>Breadth-First Search (BFS)</p>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M14.5,3c-6.33944,0 -11.5,5.16056 -11.5,11.5v21c0,6.33944 5.16056,11.5 11.5,11.5h21c6.33944,0 11.5,-5.16056 11.5,-11.5v-21c0,-6.33944 -5.16056,-11.5 -11.5,-11.5zM14.5,5h21c5.25856,0 9.5,4.24144 9.5,9.5v21c0,5.25856 -4.24144,9.5 -9.5,9.5h-21c-5.25856,0 -9.5,-4.24144 -9.5,-9.5v-21c0,-5.25856 4.24144,-9.5 9.5,-9.5zM28.00391,9c-0.39155,-0.0014 -0.7479,0.22582 -0.91182,0.5814c-0.16392,0.35559 -0.10526,0.77412 0.1501,1.07094c0,0 3.66863,4.33821 3.75586,9.86328c0.01677,1.04412 -0.34901,2.42887 -0.67969,3.73047c-1.85903,-1.33787 -10.07923,-7.29403 -14.60156,-11.94336c-0.3632,-0.37333 -0.95212,-0.40539 -1.3537,-0.07372c-0.40159,0.33168 -0.48138,0.91605 -0.1834,1.34325c0,0 1.6317,2.33697 3.55664,4.92187c0.36338,0.48797 0.6552,0.74386 1.02539,1.23242c-1.94564,-1.37491 -3.82542,-2.64688 -7.10742,-5.48242c-0.38865,-0.33386 -0.96674,-0.32 -1.33895,0.03208c-0.37221,0.35209 -0.41813,0.92852 -0.10636,1.3351c0,0 2.55066,3.30402 5.71484,6.9707c2.75529,3.19285 5.79976,6.37688 8.37305,8.2793c-0.90603,0.51976 -2.31899,1.13612 -4.79687,1.13672c-2.78415,0.00093 -6.54778,-0.89452 -10.94531,-3.83008c-0.37934,-0.25288 -0.88169,-0.21722 -1.22149,0.08672c-0.3398,0.30394 -0.43105,0.79922 -0.22187,1.2043c0,0 5.50682,10.53997 18.01367,10.54102c2.85784,0 4.90488,-0.7705 6.4707,-1.49609c1.56582,-0.72559 2.62148,-1.31055 3.60352,-1.31055c2.08945,0 3.55273,2.3125 3.55273,2.3125c0.19255,0.32941 0.55575,0.52055 0.93629,0.49275c0.38054,-0.0278 0.7121,-0.26971 0.85473,-0.6236c0.9716,-2.40826 0.18295,-4.86496 -0.74023,-6.65039c-0.75215,-1.45464 -1.37694,-2.10981 -1.68359,-2.46484c0.30488,-0.65389 0.88001,-2.05346 0.88086,-4.38477c0.00107,-4.29325 -1.87261,-10.79176 -10.43164,-16.69727c-0.16591,-0.11483 -0.36268,-0.17679 -0.56445,-0.17773zM31.60156,14.37305c4.35547,4.37694 5.39917,8.55382 5.39844,11.50195c-0.00091,2.51885 -0.86719,4.00195 -0.86719,4.00195c-0.21675,0.378 -0.16382,0.85284 0.13086,1.17383c0,0 0.97316,1.06869 1.76172,2.59375c0.47962,0.92758 0.74542,1.96714 0.82422,3.00781c-0.88047,-0.74999 -2.07449,-1.45898 -3.65039,-1.45898c-1.68396,0 -2.98238,0.81818 -4.44531,1.49609c-1.46293,0.67791 -3.11974,1.31055 -5.62891,1.31055c-6.66473,-0.00056 -10.8569,-3.15085 -13.38086,-5.83789c2.92459,1.28972 5.57025,1.83667 7.75586,1.83594c4.47733,-0.0011 7.14844,-2.23633 7.14844,-2.23633c0.24625,-0.20969 0.37589,-0.52553 0.34797,-0.84777c-0.02792,-0.32223 -0.20995,-0.61107 -0.4886,-0.77528c-2.03819,-1.20022 -5.67503,-4.98399 -8.73633,-8.50195c0.85807,0.61403 1.81551,1.3223 2.46289,1.74023c2.12746,1.37345 3.2168,1.80859 3.2168,1.80859c0.4558,0.17662 0.97249,-0.00213 1.22171,-0.42266c0.24922,-0.42053 0.15793,-0.95959 -0.21585,-1.27461c-0.47652,-0.40001 -1.69739,-2.03397 -2.68164,-3.24219c4.44184,3.5508 8.64648,6.57031 8.64648,6.57031c0.25571,0.18062 0.58124,0.23109 0.87963,0.13635c0.29839,-0.09473 0.5352,-0.32373 0.6399,-0.61877c0.66695,-1.87639 1.08549,-4.0532 1.05664,-5.84961c-0.03718,-2.35476 -0.67078,-4.35707 -1.39648,-6.11133z"></path></g></g>
                                            </svg></span>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    }
                    <Search output={output} Sendtosearch={Sendtosearch} />
                </div>
            </div>
        </>
    )
}

export default Home
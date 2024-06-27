import React, { useContext, useEffect } from 'react'
import { ClockCounterClockwise, Gear, List, Plus, Question } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import codeGeni from '../context/Codegeni'
import SidebarData from './SidebarData';

const Sidebar = () => {

    const context = useContext(codeGeni);
    const { getchatsection, chatsection, setemail } = context;

    const { user, isAuthenticated } = useAuth0();

    const navigate = useNavigate()

    const activity = () => {
        navigate('/activity')
    }
    const help = () => {
        navigate('/help')
    }

    const reload = ()=>{
        window.location.reload();
    } 

    useEffect(() => {
        if (isAuthenticated) {
            const email = user?.email
            getchatsection(email)
            setemail(user?.email)
        }
    }, [user])


    return (
        <aside className='sidebar-styled'>
            <div>
                <List weight='bold' size={20} />
                <button onClick={reload} style={{ fontSize: '15px', padding: '10px 34px' }}><Plus weight='bold' size={20} />New chat</button>
            </div>
            <div className="chatcontainer has-scrollbar">
                {chatsection?.map((chatlist) =>
                    <SidebarData key={chatlist._id} chatlist={chatlist} />
                )}
            </div>
            <div className='sidebar-bottom'>
                <div onClick={help} style={{ cursor: 'pointer' }}><Question weight='bold' size={20} />Help</div>
                <div onClick={activity} style={{ cursor: 'pointer' }}>
                    <ClockCounterClockwise weight='bold' size={20} />Activity
                </div>
                <div><Gear weight='bold' size={20} />Setting</div>
                <p>Code by CodeGeni</p>
            </div>
        </aside >
    )
}

export default Sidebar
import React, { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import codeGeni from '../context/Codegeni';

const Navbar = () => {

    const context = useContext(codeGeni);
    const {settoggleLogin} = context;

    const { user } = useAuth0();

    const handleclick = ()=>{
        settoggleLogin(false)
    }


    return (
        <nav className='navbar-styled'>
            <p>CodeGeni</p>
            <span onClick={handleclick}>
                {user?<img src={user.picture}/>:null}
            </span>
        </nav>
    )
}

export default Navbar
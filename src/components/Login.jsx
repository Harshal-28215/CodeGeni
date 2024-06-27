import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'
import logo from '../images/CodeGeni__3_-removebg-preview (1).png'
import Lottie from 'react-lottie';
import animationData from '../images/Animation - 1710596111434.json'

const Login = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg'
    }

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div style={{ overflow: 'hidden', height: '100vh', width: '100vw' }}>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className={`modal`}>
                <div className="modal-content">

                    <div className="codegenilogo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="about">
                        <h3>Welcome to Codegeni AI!</h3>
                        <p>Ready to boost your coding skills? Chat to code, plan, learn, and more. Let's dive in and supercharge your programming journey!</p>
                    </div>

                    <div>
                        {!isAuthenticated
                            ?
                            <button type="submit" className="btn-newsletter" onClick={() => loginWithRedirect()}>Singin</button>
                            :
                            <button type="submit" className="btn-newsletter" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                        }
                        <a href="https://twitter.com/kamildyrek"></a>
                    </div>
                </div>

                <div className='animation'>
                    <Lottie
                        options={defaultOptions}
                        height={800}
                        width={800}
                    />
                </div>

            </div>
        </div>
    )
}

export default Login

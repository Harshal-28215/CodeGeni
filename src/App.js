import React, { useContext } from 'react'
import Home from './pages/Home'
import './styles/Global.scss'
import Login from './components/Login'
import codeGeni from './context/Codegeni'
import { useAuth0 } from "@auth0/auth0-react";
import Form from './components/Form';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Help from './components/Help'


const App = () => {
    const context = useContext(codeGeni);
    const { toggleLogin } = context;

    const { isAuthenticated, isLoading } = useAuth0();

    return (
            <Router>
                <Routes>
                    <>
                        <Route exact path="/" element={toggleLogin && (isAuthenticated || isLoading) ? <Home /> : <Login />} />
                        <Route exact path="/activity" element={<Form />} />
                        <Route exact path="/help" element={<Help />} />
                    </>
                </Routes>
            </Router>
    )
}

export default App
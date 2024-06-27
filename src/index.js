import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import CodeGeniState from './context/CodegeniState'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-4nzqcul7kn2qdj47.us.auth0.com"
        clientId="f3QEc4zQGMDEcMJ6CK6x12mwO2HiTJ8H"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <CodeGeniState>
            <App />
        </CodeGeniState>
    </Auth0Provider>
);
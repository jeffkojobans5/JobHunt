import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';

import {JobProvider} from './context/jobsContext'

import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render( 
    <Auth0Provider
        domain="dev-eqgulow6.us.auth0.com"
        clientId="jsRLtDBONDOp9n10d26IsMXcu6AUsr0W"
        redirectUri={window.location.origin}
        cacheLocation='localstorage'
    >
    <JobProvider> 
        <App /> 
    </JobProvider> 
    </Auth0Provider>
    , document.getElementById('root'));


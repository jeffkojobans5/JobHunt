import React from 'react';

// import Auth)
import { useAuth0 } from '@auth0/auth0-react';
// import banner
import banner from '../assets/banner.jpg' 



const Login = () => {

    const { loginWithRedirect } = useAuth0()
    // const authCheck = isAuthenticated && user

    return (
        <div className="container login">
            <h1 className='text-warning'> <span style={{backgroundColor: 'orange' , color: 'white' , borderRadius: '5px' , padding: '5px'}}>Job</span>Hunt<span style={{fontSize: '4rem'}}>.</span> </h1>
            <img src={banner} alt="" style={{maxWidth: '70%' , height:'auto'}} />
            <button onClick={loginWithRedirect} className='btn form-control btn-primary mt-4 text-white' style={{width: '200px' }}> LOGIN / SIGNUP </button>
        </div>
    )
}

export default Login



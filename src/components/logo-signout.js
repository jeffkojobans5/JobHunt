import React from 'react';

// import Auth0
import { useAuth0 } from '@auth0/auth0-react';

const LogoSignout = () => {
      const { isAuthenticated  , logout , user } = useAuth0()
      const authCheck = isAuthenticated && user

    return (
        <>
        <div className="row mt-1">
          <div className="col-md-4 p-0 logo">
            <h1 className='text-warning'> <span style={{backgroundColor: 'orange' , color: 'white' , borderRadius: '5px' , padding: '5px'}}>Job</span>Hunt<span style={{fontSize: '4rem'}}>.</span> </h1>
          </div>

          <div className="col-md-4 ">
            
          </div>

          <div className="col-md-4 sign-in p-0 ">
            { authCheck && <img src={user.picture} alt="" height="50" width="50" /> }
            { authCheck && <p> Welcome, <span style={{fontWeight: '500'}}> {user.name.toUpperCase()} </span>  </p> }
            <button type='button' onClick={()=>{logout({returnTo:window.location.origin})}} className='btn btn-outline-warning'> LOG OUT </button>
          </div>
        </div>            
        </>
    )
}

export default LogoSignout

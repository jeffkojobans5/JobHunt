import React from 'react'

//react-route import
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";

// import pages
import Home from './pages/home'
import Job from './pages/job'
import Login from './pages/login'
import PrivateRoute from './pages/privateRoute'
import AuthWrapper from './pages/authWrapper'

import './styles/styles.css'

const App = () => {

  return (

    <AuthWrapper>
      <Router>
        <Switch>

        <PrivateRoute exact={true} path='/'>
          <Home />
        </PrivateRoute>

        <Route path='/job/:id'>
          <Job />                                        
        </Route>        

        <Route path='/login'>
          <Login />                                        
        </Route>
        
        </Switch>
      </Router> 
    </AuthWrapper>
  )
}

export default App;

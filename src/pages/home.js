import React from 'react'

//components
import Header from '../components/header'
import Filters from '../components/filters'
import Jobs from '../components/jobs'
import LogoSignout from '../components/logo-signout'
import Footer from '../components/footer'


const Home = () => {

  return (
    <>
    <div className="container" >
        <LogoSignout />
        <Header />
        <div className="row mt-2 mb-2">
          <Filters />
          <Jobs />
        </div>
    </div>
    <Footer />
  </>
  )
}

export default Home;

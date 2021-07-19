import React from 'react';

// import components
import Header from '../components/header'
import LogoSignout from '../components/logo-signout'
import JobSideBar from '../components/jobSideBar'
import JobBar from '../components/jobBar'
import Footer from '../components/footer'

const Job = () => {
    return (
        <>
        <div className='container'>
                <LogoSignout />
                <Header />
            <div className='row mt-5 mb-5'>
                <JobSideBar />
                <JobBar />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Job

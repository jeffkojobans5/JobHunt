import React from 'react';

// react-router link
import { Link } from 'react-router-dom'
// icons
import { FaArrowLeft } from 'react-icons/fa';


const JobSideBar = () => {
    return (
        <div className='col-md-3 back'>
            <Link to = '/'>  <button className='btn btn-warning'> <FaArrowLeft style={{ display: 'inline'}} /> Back to Search</button> </Link>
        </div>
    )
}

export default JobSideBar

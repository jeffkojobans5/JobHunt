import React from 'react'

// job context
import { JobContext } from '../context/jobsContext'
// icons
import { FaBriefcase } from 'react-icons/fa';
// link component
import { Link } from 'react-router-dom'

const Header = () => {

    const { handleSearch , InputValue  } = React.useContext(JobContext)

    return (
        <>
            <div className="row">
                <div className="col-md-12 hero p-5 mt-3 mb-3 ">
                    <div className="input-group p-1 bg-white rounded">
                        <div className="input-group-prepend"> 
                            <span className="input-group-text  bg-white border-0" id="basic-addon1"> <FaBriefcase color='gray'/> .</span>
                        </div>
                        <input type="text" onChange={handleSearch} value = {InputValue} className="form-control border-0 shadow-none    " placeholder="Title , Companies " aria-describedby="button-addon2"/>
                        <Link to = '/'> <button className="btn btn-primary rounded" type="button" id="button-addon2">Search</button> </Link>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Header

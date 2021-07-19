import React from 'react';

// job context
import { JobContext } from '../context/jobsContext'




const Filters = () => {

    const { radioValue , handleRadio } = React.useContext(JobContext)

    return (
        <div className="col-md-3  rounded filter ">
            <p className='bg-primary rounded text-white' style={{display: 'inline', padding: '0.5rem'}}>Filter</p>
            <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="All Others" onChange={handleRadio} checked = { radioValue === 'All Others'} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    All others
                </label>
            </div>

            <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Software Development" onChange={handleRadio} checked = { radioValue === 'Software Development'}  />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                Software Development
                </label>
            </div>   

            <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Design" onChange={handleRadio} checked = { radioValue === 'Design'}/>
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                Design
                </label>
            </div>

            <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Product"  onChange={handleRadio} checked = { radioValue === 'Product'} />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                Product
                </label>
            </div>    

            <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="DevOps / Sysadmin"  onChange={handleRadio} checked = { radioValue === 'DevOps / Sysadmin'} />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                DevOps / Sysadmin
                </label>
            </div>    

        </div>
    )
}

export default Filters

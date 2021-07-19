import React from 'react';

import noImage from '../assets/no-image.jpg'

import { FaRegClock } from 'react-icons/fa';

const JobsProp = (props) => {
    let { logo , company , position , status , date } = props
    
    // start of job_type reformat
    status = status.split(" ");
    for (var i = 0; i < status.length; i++) {
        status[i] = status[i].charAt(0).toUpperCase() + status[i].slice(1);
    }
    const newStatus = status.join(" ").replace('_' , ' ');
    //ends job_type

    // converts publication_date to days
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if(+diffDays === 0){
        date = 'few Hours ago'
    } else if (+diffDays ===  1) {
        date = diffDays + ' day ago'
    } else {
        date = diffDays + ' days ago'
    }
    // end 

return (
        <div className="mt-0 mb-3 pt-2 pb-2 rounded m-0 bg-white job-component">
            <div className="img ">
                { logo ?  <img src={logo} alt='company' className='rounded' height='80px' width='80px'/> : <img src={noImage} alt='company' className='rounded' height='80px' width='80px' />  } 
            </div>
            <div className="flexDirection info">
                <h6 style={{color: 'gray'}}> {company} </h6>
                <h5 className='text-dark'> {position} </h5>
                { newStatus ? <p className='border border-secondary rounded text-dark text-center pt-1' style={{width: '80px'}}> { newStatus }</p> : ''}
            </div>                
            <div className="date flexDis">
                <p className='m-0' style={{fontSize: '0.9rem' , color : 'gray'}}> <FaRegClock /> {date} </p>
            </div>                
        </div>        
    )
}

export default JobsProp

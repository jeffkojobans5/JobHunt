import React from 'react';
import { useParams } from 'react-router-dom'

// jobs context
import { JobContext } from '../context/jobsContext'
// icons
import { FaRegClock } from 'react-icons/fa';
// search image
import noImage from '../assets/no-image.jpg'

const JobBar = () => {

    const { id } = useParams()
    const { jobs } = React.useContext(JobContext)
    const singleJob = jobs.find(item => item.id === parseInt(id))

    if (jobs.length === 0) {
        return 'loading'
    }   else {
        let { id, company_logo_url, company_name , job_type , publication_date , description} = singleJob;
    
    // start of job_type reformat
    job_type = job_type.split(" ");    
    for (var i = 0; i < job_type.length; i++) {
        job_type[i] = job_type[i].charAt(0).toUpperCase() + job_type[i].slice(1);
    }
    const newStatus = job_type.join(" ").replace('_' , ' ');
    // end of job_type


    // converts publication_date to days
    const date1 = new Date(publication_date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if(+diffDays === 0){
        publication_date = 'few Hours ago'
    } else if (+diffDays ===  1) {
        publication_date = diffDays + ' day ago'
    } else {
        publication_date = diffDays + ' days ago'
    }
    // end of publication_date



    return (
        <div className='col-md-9 bg-white m-0 pt-3 pb-3 rounded-1 singleJob' key={id} >
            <div className="row pt-0">
                <div className="col-md-2 col-sm-2 detials">
                    { company_logo_url ?  <img src={company_logo_url} alt='company' className='rounded' /> : <img src={noImage} alt = 'company' height='80px' width='80px' className='rounded' />  }                 
                </div>                  
                <div className="col-md-9 col-sm-10">
                    <h3 className='text-primary'> {singleJob.title}   { newStatus ? <span className='border border-secondary rounded text-dark text-center p-2 mt-3 title'> { newStatus }</span> : ''}</h3> 
                    <p className='m-0' style={{fontSize: '0.9rem' , color : 'gray'}}> {company_name} <FaRegClock style={{marginLeft: '1rem'}}/> {publication_date} </p>
                </div>       
                <div className="col-md-1 apply" style={{display: 'flex' , justifyContent : 'flex-end' , alignItems : 'flex-start' }}>
                    <button className='btn btn-danger '> APPLY </button>
                </div>                          
            </div>
            <div className='mt-5 p-2 man description' dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
        )
    }
}

export default JobBar



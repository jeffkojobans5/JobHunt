import React from 'react';

// link
import {Link} from 'react-router-dom'
// react paginate
import ReactPaginate from 'react-paginate';
// jobs prop
import JobsProp from '../props/jobsProp'
// job context
import { JobContext } from '../context/jobsContext'
// imports loader
import MyLoader from "../components/Loader"
// icons
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


const Jobs = () => {

    const { filter , loading } = React.useContext(JobContext)

    // pagination begins
    const [pageNumber, setPageNumber] = React.useState(0)
    const userPage = 5
    const pagesVisited = pageNumber * userPage
    // pagination ends

    
    const displayUsers = filter
        .slice(pagesVisited , pagesVisited + userPage)
        .map((item)=>{
            const { id, company_logo_url, company_name , title ,job_type , publication_date} = item;
            return(                   
                   <Link to={`job/${id}`}> <JobsProp key={id} logo={company_logo_url} company={company_name} position={title} status={job_type} date={publication_date} /> </Link>
                )            
        })
    
        
    const pageCount = Math.ceil(filter.length / userPage)
    
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }


    return (
        <div className="col-md-9   job-column col-sm-12 p-0">
            <div className="col-md-12 mt-3 mb-3 resultsLength">
                <h5> Results <span className='bg-warning rounded text-white' style={{display: 'inline', padding: '0.1rem' , width : '100px'}}> {filter.length}</span>  </h5>                   
            </div>

            {displayUsers}

            {filter.length > 0 &&
            <div className="col-md-12  mt-3 pt-3 pb-1  rounded" style={{backgroundColor : ''}}>
                <ReactPaginate 
                    previousLabel={ <FaArrowLeft />}
                    nextLabel={ <FaArrowRight />}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </div>
            }

            { loading ? 
                <>
                <MyLoader /> 
                <MyLoader /> 
                <MyLoader /> 
                <MyLoader /> 
                <MyLoader /> 
                </>
                : ''}
        </div>
    )
}

export default Jobs

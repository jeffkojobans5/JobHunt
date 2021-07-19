import React from 'react'

// import job context
const JobContext = React.createContext();


const JobProvider = ({children}) => {
    const [jobs , setJobs] = React.useState([])
    const [filter , setFilter] = React.useState([]) 
    const [loading , isLoading] = React.useState(true) 
    const [ InputValue , setInputValue] = React.useState('') 
    const [ radioValue , setRadioValue] = React.useState('All Others') 

    const fetchJobs = () => {
        fetch(`https://remotive.io/api/remote-jobs?limit=20000`)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            throw Error(response.statusText);
          }
        })
        .then(data => {
            let filtered =  data['jobs'].filter(item => item.category === 'Software Development'  || item.category === 'Design' || item.category === 'Product'  || item.category === 'DevOps / Sysadmin'   )
            isLoading(false)
            setJobs(filtered)
            setFilter(filtered)
        }).catch(error => {
            isLoading(false)            
        })
    }


    const handleSearch = (e) => {
        setInputValue(e.target.value)
    }

    const handleRadio = (e) => {
        setRadioValue(e.target.id)
    }


    const filterFunc = () => {
        let filtering = [...jobs].filter(item => item.title)

        if(InputValue !== ''){
              filtering = filtering.filter(item => item.title.toLowerCase().includes(InputValue) || item.company_name.toLowerCase().includes(InputValue));
            }

        if(radioValue === 'All Others') {
            filtering = filtering.filter(item => item.category)
        }

        if(radioValue !== 'All Others') {
            filtering = filtering.filter(item => item.category === radioValue)
        }

        setFilter(filtering)   
    }

    React.useEffect(()=> {
        filterFunc()
    },[ InputValue , radioValue ])


    React.useEffect(()=> {
        fetchJobs()
    }, [])

    return (
        <JobContext.Provider
            value={{jobs , filter , handleSearch , InputValue , radioValue , handleRadio , loading }}>
            {children}
        </JobContext.Provider>
    )
}

export  {JobProvider , JobContext}
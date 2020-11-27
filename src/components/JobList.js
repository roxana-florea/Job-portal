import React from 'react';
import Axios from 'axios';
import Job from './Job';


class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword: '',
            jobsArray: [],
            description : false
        }
        this.getJobs = this.getJobs.bind(this);
    }




getJobs(){
    Axios.get('https://remotive.io/api/remote-jobs')
        .then(response => response.data)
        .then(data => {
            console.log(data)
            this.setState({
                jobsArray: data.jobs
            })
        })
}

filterTitles = (ev)=>{
    console.log(ev.target.value)
    this.setState({keyword : ev.target.value})

}

// componentDidMount() {
//     this.getJobs();
// }

activateModal = ()=>{
    this.setState({description: !this.state.description})
}

showModal = () => {
    // this.setState({description: !this.state.description})
    return (
        <div>
            {
               this.state.description &&
                <p>Hello world</p>
            }
        </div>
    )
}


render() { 
    return (  
        <div>
            <input type="text" placeholder="e.g Front-end development" onChange={this.filterTitles}></input>
            <button onClick={this.getJobs}>Search</button>
            {
                this.state.jobsArray.filter(jobObject => {
                    if (this.state.keyword === '') {
                        return jobObject;
                    } else if (
                        jobObject.title
                            .toLowerCase()
                            .includes(this.state.keyword.toLowerCase())
                    ) {
                        return jobObject;
                    }
                })
                .map((jobObject) => {
                    return (
                        <Job
                    title={<a href="#" onClick={this.activateModal}>{jobObject.title}</a>}
                            logo={jobObject.salary}
                            type={jobObject.job_type.split('_').join(' ')}
                            location={jobObject.candidate_required_location}
                            company={jobObject.company_name}
                            date={jobObject.publication_date.slice(0,10)}
                            // key={index}
                            key={jobObject.id}
                            
                        />
                        
                    );
                    
                })
               
            }
     

        </div>
       
    );
    
}

}
 
export default JobList;
// https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code
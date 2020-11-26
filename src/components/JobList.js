import React from 'react';
import Axios from 'axios';
import Job from './Job';
class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword: '',
            jobsArray: []
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

render() { 
    return (  
        <div>
            <input className="joblist--input" type="text" placeholder="e.g Front-end development" onChange={this.filterTitles}></input>
            <button onClick={this.getJobs}>Search</button>
            {
                this.state.jobsArray.filter((jobObject) => {
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
                            title={jobObject.title}
                            salary={jobObject.salary}
                            type={jobObject.job_type.split('_').join(' ')}                 
                            location={jobObject.candidate_required_location}
                            company={jobObject.company_name}
                            date={jobObject.publication_date}
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
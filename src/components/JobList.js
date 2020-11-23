import React from 'react';
import Axios from 'axios';
import Job from './Job';


class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobsArray: []
        }
    }

componentDidMount(){
    this.getJobs();
}

getJobs(){
    Axios.get('https://jobs.github.com/positions.json?page=1&search=code')
        .then(response => response.data)
        .then(data => {
            console.log(data);
            this.setState({
                jobsArray: data
            })
        })
}


    render() { 
        return (  
            <div>
                {
                    this.state.jobsArray.map(jobObject => <Job title = {jobObject.title}/>)
                }
            </div>
            );
    }
}
 
export default JobList;
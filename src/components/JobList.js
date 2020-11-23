import React from 'react';
import Axios from 'axios';
import Job from './Job';


class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobsArray: []
        }
        this.getJobs = this.getJobs.bind(this);
    }

// componentDidMount(){
//     this.getJobs();
// }

componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code')
      .then(res => res.json())
      .then(data => console.log(data))
  }

getJobs(){
    Axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code')
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
                    this.state.jobsArray.map(jobObject => {
                        return (
                            <Job title = {jobObject.title}/>
                        )
                    } )
                }
            </div>
            );
    }
}
 
export default JobList;
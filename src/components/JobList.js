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

componentDidMount(){
    this.getJobs();
}

// componentDidMount() {
//     fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code')
//       .then(res => res.json())
//       .then(data => console.log(data))
//   }

 // componentDidMount() {
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       sentence1: data.value
  //     }))
  //   
  // }


getJobs(){
    Axios.get('https://remotive.io/api/remote-jobs')
        .then(response => response.data)
        .then(data => {
            console.log(data);
            this.setState({
                jobsArray: data
            })
        })
}


getJobResults = () => {
    console.log("function is called");
    
}


    render() { 
        return (  
            <div>
                <input type="text" placeholder="e.g Front-end development"></input>
                <button onClick={this.getJobResults}>Search</button>
                {
                    this.state.jobsArray.map((jobObject) => {
                        return (
                            <Job 
                                title = {jobObject.title} 
                                type = {jobObject.type}
                                location ={jobObject.location}
                                company={jobObject.company}
                                // key={index} 
                                key={jobObject.id}
                            />
                        )
                    } )
                }
            </div>
            );
    }
}
 
export default JobList;
// https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code
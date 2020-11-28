import React from 'react';
import Axios from 'axios';
import Job from './Job';

//function to remove html from job description
const removeHtml = (text) =>{
    let countPar = 0;
    let leftover = '';

      for(let i = 0; i<text.length; i++){
        if(text[i]==='<'){
          countPar++;
        }else if(text[i]==='>'){
          countPar--;
        }else if(countPar===0){
          leftover+=text[i]
        }
      }
      return leftover
    }

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
           <div className="job-list">
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
                            logo={jobObject.company_logo_url}
                            title={jobObject.title}
                            salary={jobObject.salary}
                            type={jobObject.job_type.split('_').join(' ')}                 
                            location={jobObject.candidate_required_location}
                            company={jobObject.company_name}
                            date={jobObject.publication_date.slice(0,10)}
                            description={removeHtml(jobObject.description)}
                            // key={index}
                            key={jobObject.id}
                        />
                    );
                })
            }
          </div>
        </div>
    );
}
}
export default JobList;
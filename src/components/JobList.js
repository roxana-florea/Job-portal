import React from 'react';
import Axios from 'axios';
import Job from './Job';
import SearchNav from './SearchNav';


class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsArray: []
        }
    }

    getFilteredJobsListFromSearchNav = (filteredJobsArray) => {
        this.setState({
            jobsArray: filteredJobsArray
        })
    }

    render() {
        return (
            <div>
               {/* Parent JobsList passes the function to SearchNav child: 
               "hey SearchNav" call api and filter and give me the result by calling this function */}
                <SearchNav functionToCallForFilteredJobs={this.getFilteredJobsListFromSearchNav} />
                {
                    this.state.jobsArray.map((jobObject) => {
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
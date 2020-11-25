import React from 'react';
// Job Card
const Job = ({title, type, company, location, date, salary}) => {  
    return ( 
        <div>
            <h2>{title}</h2>
            <h3>{type}</h3>
            <h3>{company}</h3>
            <h4>{location}</h4>
            <h4>{salary}</h4>
            <p>{date}</p>
            <button>Click</button>
        </div> 
    );    
}
export default Job;
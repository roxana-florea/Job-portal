import React from 'react';



const Job = (props) => {  
    return ( 
        <div>
            <h2>{props.title}</h2>
            <p>{props.type}</p>
        </div> 
    );
    
}
 
export default Job;
import './App.css';
import React from 'react';
// import Input from './components/Input';
// import Button from './components/Button';
import JobList from './components/JobList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  getJobResults = () => {
    console.log("function is called");
    
}
  
  render() { 
    return ( 
      <div>
        <h1>Hello Chucks</h1>
        
        {/* <Input /> */}
        {/* <Button /> */}
        <JobList />        
    </div>);
  }
}


export default App;

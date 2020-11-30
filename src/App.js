import './App.css';
import React from 'react';
import JobList from './components/JobList';
import SocialMediaLinks from './components/SocialMediaLinks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      userStatus: false
    }
  }
  
  
  render() { 
    return ( 
      <div className="landing--page--container">
        <h1>Welcome to Chuks job portal!</h1> 
          <LandingPage /> 
          <Dashboard />           
          {/* <JobList /> 
          <SocialMediaLinks />       */}
    </div>);
  }
}


export default App;

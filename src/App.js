import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'


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
          
    </div>);
  }
}


export default App;

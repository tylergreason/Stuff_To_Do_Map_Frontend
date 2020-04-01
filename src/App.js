import React, { Component } from 'react';

import Login from './auth/Login'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 

class App extends Component {
  state = {

  }


  handleLogin = () => {
    this.setState({
      loggedIn:true
    })
  }

  handleLogout = () => {
    localStorage.clear() 
    this.setState({
      loggedIn:false 
    })
  }
  render(){

    return (
      <Router>

      <div className="App">
      App Component 
        <Login/>
    </div>
      </Router>
  );
}
}

export default App;

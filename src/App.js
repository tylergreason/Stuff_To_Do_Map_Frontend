import React, { Component } from 'react';


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
      <div className="App">
      App Component 
    </div>
  );
}
}

export default App;

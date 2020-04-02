import React, { Component } from 'react';
import Login from './auth/Login'
import { connect } from 'react-redux'
import { setLogin } from './actions/authActions'
import Signup from './auth/Signup'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 

class App extends Component {
  state = {

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
      </div>
        <Switch>
            <Route path="/login" component={()=>{
              return <Login/>
            }}></Route>

            {/* for logout route, set store state loggedIn to false and redirect to root  */}
            <Route path="/logout" component={()=>{
              this.props.setLogin(false)
              return <Redirect to="/"></Redirect>
            }}></Route>

            <Route path='/signup' component={()=>{
              return <Signup />
            }
            }></Route>
        </Switch>
      </Router>
  );
}
}


const mapStateToProps = (state) => {
  return {loggedIn: state.loggedIn}
}
export default connect(mapStateToProps, { setLogin })(App);

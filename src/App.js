import React, { Component } from 'react';
import Login from './auth/Login'
import Signup from './auth/Signup'
import Navbar from './containers/Navbar'
import { connect } from 'react-redux'
import { logout } from './actions/authActions'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 

class App extends Component {
  state = {

  }

  // handleLogout = () => {
  //   localStorage.clear() 
  //   this.setState({
  //     loggedIn:false 
  //   })
  // }
  render(){
    return (
      <Router>
        STDM
      <Navbar />
        <Switch>
            <Route path="/login" component={()=>{
              return <Login/>
            }}></Route>

            {/* for logout route, set store state loggedIn to false and redirect to root  */}
            <Route path="/logout" component={()=>{
              this.props.logout()
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
export default connect(mapStateToProps, { logout })(App);

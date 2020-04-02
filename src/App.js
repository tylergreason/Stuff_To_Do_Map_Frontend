import React, { Component } from 'react';
import Login from './auth/Login'
import Signup from './auth/Signup'
import Navbar from './containers/Navbar'
import { connect } from 'react-redux'
import { logout } from './actions/authActions'

// for '/' route: 
import MapPage from './containers/MapPage'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 

class App extends Component {
  state = {
    attractions: [],
    loggedIn:false
  }

  componentDidMount(){
    if (localStorage.auth_token){
      this.setState({
        loggedIn:true
      })
    }
  }

  changeAppLoggedIn = (boolean) =>{
    this.setState({
      loggedIn:boolean
    })
  }

  render(){
    console.log(this.state.loggedIn)
    return (
      <Router>
        STDM
      <Navbar loggedIn={this.state.loggedIn}
              changeAppLoggedIn={this.changeAppLoggedIn}/>
        <Switch>
            <Route path="/login" component={()=>{
              return <Login changeAppLoggedIn={this.changeAppLoggedIn}/>
            }}></Route>

            {/* for logout route, set store state loggedIn to false and redirect to root  */}
            <Route path="/logout" component={()=>{
              this.props.logout()
              this.changeAppLoggedIn(false)
              return <Redirect to="/"></Redirect>
            }}></Route>

            <Route path='/signup' component={()=>{
              return <Signup />
            }
            }></Route>
            <Route path="/" component={()=>{
              return <MapPage />
            }}></Route>
        </Switch>
      </Router>
  );
}
}


const mapStateToProps = (state) => {
  return {loggedIn: state.loggedIn}
}
export default connect(mapStateToProps, { logout })(App);

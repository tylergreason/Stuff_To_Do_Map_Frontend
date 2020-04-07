import React, { Component } from 'react';
import Login from './auth/Login'
import Signup from './auth/Signup'
import CheckLogin from './auth/CheckLogin'
import Navbar from './containers/Navbar'
import About from './components/About'
import MyAttractionsList from './containers/MyAttractionsList'
import MyAccount from './components/MyAccount'
import { connect } from 'react-redux'
import { logout } from './store/actions/authActions'

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
    return (
      <Router>
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
              return <Signup changeAppLoggedIn={this.changeAppLoggedIn}/>
            }}></Route>
            <Route path='/about' component={()=>{ return <About /> }}></Route>
            {/* confirm user is logged in before going to myAttractions or myAccount */}
            <Route path="/myAttractions" component={() =>{ return <CheckLogin component={MyAttractionsList}/>}}/>
            <Route path="/myAccount" component={() =>{ return <CheckLogin component={MyAccount}/>}}/>
            <Route path="/" component={()=>{ return <MapPage /> }}></Route>
        </Switch>
      </Router>
  );
}
}


const mapStateToProps = (state) => {
  return {loggedIn: state.loggedIn}
}
export default connect(mapStateToProps, { logout })(App);

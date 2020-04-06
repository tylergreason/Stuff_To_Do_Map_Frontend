import React, { Component } from 'react';
import Login from './auth/Login'
import Signup from './auth/Signup'
import Navbar from './containers/Navbar'
import About from './components/About'
import MyAttractionsList from './containers/MyAttractionsList'
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
              return <Signup changeAppLoggedIn={this.changeAppLoggedIn}/>
            }}></Route>
            <Route path='/about' component={()=>{
              return <About />
            }}></Route>
            {/* if user is logged in and goes to myAttractions  */}
            {this.state.loggedIn==true && <Route path="/myAttractions" component={()=>{ return <MyAttractionsList />}}></Route>}
            {/* if user is logged OUT and goes to my attractions, redirect to main page  */}
            {this.state.loggedIn==false && <Route path="/myAttractions" component={()=>{ return <MapPage />}}></Route>}

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

import React, { Component } from 'react';
import Login from './auth/Login'
import Signup from './auth/Signup'
import CheckLogin from './auth/CheckLogin'
import Navbar from './containers/Navbar'
import About from './components/About'
import MyAttractionsList from './containers/MyAttractionsList'
import MyAccount from './components/myAccount/MyAccount'
import { connect } from 'react-redux'
import { logout } from './store/actions/authActions'
import { getUser } from './store/actions/UserActions'

// for '/' route: 
import MapPage from './containers/MapPage'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 

class App extends Component {
  state = {
    attractions: [],
    loggedIn:false
  }

    componentDidMount=()=>{
      this.props.getUser()
    }


  changeAppLoggedIn = (boolean) =>{
    this.setState({
      loggedIn:boolean
    })
  }

  render(){
    return (
      <Router>
      <Navbar />
        <div id="mainContainer">
        <Switch>
            <Route path="/login" 
              component={()=>{
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
            <Route path='/about' render={()=>{ return <About /> }}></Route>
            {/* confirm user is logged in before going to myAttractions or myAccount */}
            <Route path="/myAttractions" render={() =>{ return <CheckLogin 
                                                                  render={()=>{
                                                                    return <MyAttractionsList />
                                                                  }
                                                                  }
            
                                                                />}}/>
            <Route path="/myAccount" render={() =>{ 
                                                  return <CheckLogin 
                                                            render={()=>{
                                                              return <MyAccount />
                                                            }}
                                                        />
                                                  }}/>
            <Route path="/" render={()=>{ return <MapPage /> }}></Route>
        </Switch>
        </div>
      </Router>
  );
}
}


const mapStateToProps = (state) => {
  return {
          loggedIn: state.loggedIn,
          user: state.user.user
        }
}
export default connect(mapStateToProps, { logout,getUser })(App);

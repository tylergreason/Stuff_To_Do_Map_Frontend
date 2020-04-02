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
    attractions: []
  }


//   componentDidMount = () => {
//     fetch('http://localhost:3000/attractions', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//         // ,
//         // 'Access-Token': localStorage.auth_token
//     }
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         this.setState({attractions:data});
//     })
//     .catch((error) => {
//     console.error('Error:', error);
//     });
// }


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

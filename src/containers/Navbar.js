import React, { Component } from 'react' 
import { connect } from 'react-redux'
// import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'; 
import { withRouter } from 'react-router'
// import Button from '../components/general/Button'
import { logout } from '../store/actions/authActions'

class Navbar extends Component {
    handleNavbarClick = (e) => {
        const path = e.target.value
        this.props.history.push(path)
    }

    logout = () => {
        localStorage.clear()
        this.props.changeAppLoggedIn(false)
        this.props.logout()
    }

    renderLoggedInNavbar = () => {
        return (
            <>
                <button value='/' name='map' onClick={this.handleNavbarClick}>Map</button>
                <button value='/about' name='about' onClick={this.handleNavbarClick}>About</button>
                <button value="/myAttractions" name='myAttractions' onClick={this.handleNavbarClick}>My Attractions</button>
                <button value="/myAccount" name='myAccount' onClick={this.handleNavbarClick}>My Account</button>
                <button value="/logout" name='logout' onClick={this.logout}>Log Out</button>
            </>
        )
    }

    renderLoggedOutNavbar = () => {
        return (
            <>
                <button value='/' name='map' onClick={this.handleNavbarClick}>Map</button>
                <button value='/about' name='about' onClick={this.handleNavbarClick}>About</button>
                <button value='/signup' name='signUp' onClick={this.handleNavbarClick}>Sign Up</button>
                <button value="/login" name='login' onClick={this.handleNavbarClick}>Log In</button>
            </>
        )
    }

    renderNavbar = () => {
        if (this.props.loggedIn){
            return this.renderLoggedInNavbar() 
        }else if (this.props.loggedIn===false){
            return this.renderLoggedOutNavbar() 
        }
    }

    render(){
        return(
            <span class="NavbarParent">
            <h1 class='title'>Stuff To Do Map</h1>
            <span class="NavBar">
                {this.renderNavbar()}
            </span>
            </span>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {loggedIn: state.loggedIn}
// }

export default withRouter(connect(null, {logout})(Navbar))
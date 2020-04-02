import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'; 
import { withRouter } from 'react-router'
import Button from '../components/general/Button'
import { logout } from '../actions/authActions'

class Navbar extends Component {
    handleNavbarClick = (e) => {
        console.log(e.target.value)
        const path = e.target.value
        this.props.history.push(path)
    }

    logout = () => {
        this.props.logout()
        localStorage.clear()
    }

    renderLoggedInNavbar = () => {
        return (
            <div>
                <button value='/' name='map' onClick={this.handleNavbarClick}>Map</button>
                <button value='/about' name='about' onClick={this.handleNavbarClick}>About</button>
                <button value="/myAttractions" name='myAttractions' onClick={this.handleNavbarClick}>My Attractions</button>
                <button value="/myAccount" name='myAccount' onClick={this.handleNavbarClick}>My Account</button>
                <button value="/logout" name='logout' onClick={this.logout}>Log Out</button>
            </div>
        )
    }

    renderLoggedOutNavbar = () => {
        return (
            <div>
                <button value='/' name='map' onClick={this.handleNavbarClick}>Map</button>
                <button value='/about' name='about' onClick={this.handleNavbarClick}>About</button>
                <button value='/signup' name='signUp' onClick={this.handleNavbarClick}>Sign Up</button>
                <button value="/login" name='login' onClick={this.handleNavbarClick}>Log In</button>
            </div>
        )
    }

    renderNavbar = () => {
        return this.props.loggedIn===true
        ? 
        this.renderLoggedInNavbar() 
        : 
        this.renderLoggedOutNavbar() 
    }
    render(){
        return(
            <>{this.renderNavbar()}</>
        )
    }
}

const mapStateToProps = (state) => {
    return {loggedIn: state.loggedIn}
}

export default withRouter(connect(mapStateToProps, {logout})(Navbar))
import React, { Component } from 'react' 
import { connect } from 'react-redux'
// import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'; 
import { withRouter } from 'react-router'
// import Button from '../components/general/Button'
import { logout } from '../store/actions/authActions'

class Navbar extends Component {
    state = {
        path:''
    }
    componentDidMount = () =>{
        const buttons = this.allNavBarButtons()
        console.log(buttons)
    }

    // in component did update, check to see if any buttons have a class that matches this state's path 
    componentDidUpdate = () => {
        //remove highlight from all buttons 
        this.removeHighlightClass()
        // loop through the buttons, and if their name matches this state's path value, then give that button the highlight class 
        const buttons = this.allNavBarButtons() 
        this.addHighlightToButton(buttons)
    }

    addHighlightToButton = buttons => {
        buttons.forEach(button => {
            if (button.name === this.state.path){
                button.classList.add('highlight')
            }
        })
    }

    handleNavbarClick = (e) => {
        const path = e.target.value
        this.props.history.push(path)
        this.removeHighlightClass()
        e.target.classList.add('highlight')
        console.log(e.target.classList)
        this.setState({
            path:e.target.name
        })
        // e.target.classList.remove('blargh')
        // console.log(e.target.classList)
    }

    logout = () => {
        localStorage.clear()
        this.props.changeAppLoggedIn(false)
        this.props.logout()
    }

    // remove highlight class from all NavBar buttons
    removeHighlightClass = () =>{
        const buttons = this.allNavBarButtons()
        buttons.forEach(button => button.classList.remove('highlight'))
    }

    allNavBarButtons = () => {
        const navBarButtons = document.getElementsByClassName('NavBarButton'); 
        return Array.from(navBarButtons) 
    }


    renderLoggedInNavbar = () => {
        return (
            <>
                <button className='NavBarButton highlight' value='/' name='map' onClick={this.handleNavbarClick}>Map</button>
                <button className='NavBarButton' value='/about' name='about' onClick={this.handleNavbarClick}>About</button>
                <button className='NavBarButton' value="/myAttractions" name='myAttractions' onClick={this.handleNavbarClick}>My Attractions</button>
                <button className='NavBarButton' value="/myAccount" name='myAccount' onClick={this.handleNavbarClick}>My Account</button>
                <button className='NavBarButton' value="/logout" name='logout' onClick={this.logout}>Log Out</button>
            </>
        )
    }

    renderLoggedOutNavbar = () => {
        return (
            <>
                <button className='NavBarButton'  value='/' name='map' onClick={this.handleNavbarClick}>Map</button>
                <button className='NavBarButton'  value='/about' name='about' onClick={this.handleNavbarClick}>About</button>
                <button className='NavBarButton'  value='/signup' name='signUp' onClick={this.handleNavbarClick}>Sign Up</button>
                <button className='NavBarButton'  value="/login" name='login' onClick={this.handleNavbarClick}>Log In</button>
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
            <span className="NavbarParent">
            <h1 className='title'>Stuff To Do Map</h1>
            <span className="NavBar">
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
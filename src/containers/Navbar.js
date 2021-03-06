import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { logout } from '../store/actions/authActions'
import { getAttractionListShown } from '../store/actions/generalActions'
import { attractionListStatus } from '../generalFunctions'
import { toggleAttractionListShow } from '../generalFunctions'
import ToggleListButton from '../components/general/ToggleListButton'


class Navbar extends Component {
    state = {
        path:this.props.location.pathname
    }

    currentPage = this.props.history.location.pathname;

    componentDidMount = () =>{
        this.removeHighlightClass()
        const buttons = this.allNavBarButtons()
        this.addHighlightToButton(buttons)
        // set whether the attraction list is shown in the state 
        this.props.getAttractionListShown()

    }
    
    // in component did update, check to see if any buttons have a class that matches this state's path 
    componentDidUpdate = () => {
        this.currentPage = this.props.history.location.pathname;
        console.log(this.currentPage)
        //remove highlight from all buttons 
        this.removeHighlightClass()
        // loop through the buttons, and if their name matches this state's path value, then give that button the highlight class 
        const buttons = this.allNavBarButtons() 
        this.addHighlightToButton(buttons)
        // toggleAttractionListShow()
        console.log('navbar updated')
        // set whether the attraction list is shown in the state 
        this.props.getAttractionListShown()
    }
    
    checkForMobile = () =>{
        // if the window is less than 870 pixels wide, the user is probably on mobile. Return true. 
        return this.props.windowWidth < 870
    }
    
    addHighlightToButton = buttons => {
        buttons.forEach(button => {
            if (button.value === this.currentPage){
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
    }

    logout = () => {
        localStorage.clear()
        this.props.logout()
        this.props.history.push('/')
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
    
    // choose class name based on window width 
    navBarClassName = () => {
        if (this.checkForMobile()){
            return "NavBarParent"
        }else{
            return "NavBarParent"
        }
    }
    
    renderLoggedInNavbar = () => {
        return (
            <>
                <button className='NavBarButton highlight' value='/' name='map' onClick={this.handleNavbarClick}>Map</button>
                <button className='NavBarButton' value='/about' name='/about' onClick={this.handleNavbarClick}>About</button>
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

    renderToggleAttractionListShowButton = () => {
        // check width and render if this width is small enough 
        console.log(attractionListStatus())
        if (this.checkForMobile()){
            if (this.currentPage === "/" || this.currentPage === "/myAttractions"){
                return (<ToggleListButton 
                            text={attractionListStatus()}
                            page={this.currentPage}
                        />)
            }
        }
    }

    render(){
        return(
            <>
            <div className={this.navBarClassName()}>
                {this.renderToggleAttractionListShowButton()}
            <h1 className='title'>Stuff To Do Map</h1>
                <span className="NavBar">
                    {this.renderNavbar()}
                </span>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
        windowWidth: state.general.windowWidth
    }   
}

export default withRouter(connect(mapStateToProps, {logout, getAttractionListShown})(Navbar))
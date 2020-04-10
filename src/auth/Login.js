import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { login } from '../store/actions/authActions'
import { withRouter } from 'react-router'

class Login extends Component{
    state= {
        email:'', 
        password:''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    returnMessage = message => {
        this.setState({
            returnMessage:message
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // arrange user info how backend wants 
        const infoToSubmit = {
            email: this.state.email, 
            password: this.state.password
        } 
        this.props.login(infoToSubmit, this.returnMessage)
    }

    redirectToHomeIfLoggedIn = () => {
        if (this.props.loggedIn === true){
            this.props.history.push('/')
        }
    }

    renderLoginForm = () => {
        return(
            <div className='informationBox middlePageBox'>
                <h2> Login </h2>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name='email' placeholder="Email" onChange={this.handleInput} value={this.state.email} />
                <br></br>
                
                <input type="password" name='password' placeholder="password" onChange={this.handleInput} value={this.state.password} />
                <br></br>
                
                <button id="submit" type="submit" value="Submit">Login</button>
                </form>
            </div>
        ) 
    }

    render(){
        return (
            <>
                {this.redirectToHomeIfLoggedIn()}
                {this.renderLoginForm()}
            </>
        ) 
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn  
    }
}
export default withRouter(connect(mapStateToProps, {login})(Login))
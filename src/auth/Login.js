import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { login } from '../store/actions/authActions'
import { withRouter } from 'react-router'
import { ServerResponseCard } from '../components/ServerResponseCard'

class Login extends Component{
    state= {
        email:'', 
        password:'',
        returnMessage:[]
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
        // set the path and history to the map page for appropriate button highlighting 
        if (this.props.loggedIn === true){
            this.props.history.push('/')
        }
    }

    renderLoginForm = () => {
        return(
            <div className='login'>
                {/* <label> Login </label> */}
                <form onSubmit={this.handleSubmit} className="informationBox">
                <label>Email: </label>
                <br></br>
                <input type="text" name='email' placeholder="Email" onChange={this.handleInput} value={this.state.email} />
                <br></br>
                <label>Password: </label>
                <br></br>
                <input type="password" name='password' placeholder="password" onChange={this.handleInput} value={this.state.password} />
                <ServerResponseCard response={this.state.returnMessage} />
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
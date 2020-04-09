import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { login, logout } from '../store/actions/authActions'
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
    handleSubmit = (e) => {
        e.preventDefault(); 
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: this.state })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error){
                console.log(data.error)
            }else{
                console.log(data)
                localStorage.setItem('auth_token',data.token)
                this.props.login(data.user) 
                // this.props.changeAppLoggedIn(true)
                this.props.history.push('/')
            }
        })
    }


    logout = () => {
        this.props.logout()
        localStorage.clear()
    }
    renderLoginForm = () => {
        if (this.props.loggedIn){
            return (
                <div>You are already logged in
                    <button onClick={this.logout}>
                        log out
                    </button>
                </div>
                )
        }else{
            return(
                    <div className={'informationBox'}>
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
    }

    render(){
        return (
            <>{this.renderLoginForm()}</>
        ) 
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
        success: state.user.success, 
        errors: state.user.errors
    
    }
}
export default withRouter(connect(mapStateToProps, {login, logout})(Login))
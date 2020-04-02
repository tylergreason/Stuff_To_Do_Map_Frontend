import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { setLogin } from '../actions/authActions'
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
            console.log(data)
            localStorage.setItem('auth_token',data.token)
            this.props.setLogin(true) 
            // this.props.handleLogin()
            this.props.history.push('/')
        })
    }
    render(){
        return (
            <span className={'form-outer'}>
            <h2> Login </h2>
            <form className={'add-book'} onSubmit={this.handleSubmit}>
                <input type="text" name='email' placeholder="Email" onChange={this.handleInput} value={this.state.email} />
                <br></br>
                <input type="password" name='password' placeholder="password" onChange={this.handleInput} value={this.state.password} />
                <br></br>
                <input id="submit" type="submit" value="Submit" />
            </form>
        </span>
        ) 
    }
}
// const mapStateToProps = (state) => {
//     return {loggedIn: state.loggedIn}
// }
export default withRouter(connect(null, {setLogin})(Login))
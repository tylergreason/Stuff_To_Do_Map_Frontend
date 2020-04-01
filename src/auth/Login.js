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
            localStorage.setItem('auth_token',data.token)
            this.props.setLogin(true) 
            // this.props.handleLogin()
            this.props.history.push('/')
        })
    }
    render(){
    return(
        <>
        {/* will render inline since it's not a div  */}
        Login 
        <button onClick={this.handleSubmit}>submit</button>

        </>
        )
    }
}
const mapStateToProps = (state) => {
    return {loggedIn: state.loggedIn}
}
export default withRouter(connect(mapStateToProps, {setLogin})(Login))
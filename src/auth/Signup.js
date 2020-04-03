import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { login, logout } from '../store/actions/authActions'
import { withRouter } from 'react-router'
class Signup extends Component {
    state = {
        email:'', 
        password:'', 
        confirmPassword:''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email !== "" && this.state.password === this.state.confirmPassword){
            console.log("they match! ")
            this.submitSignupData()
        }else{
            console.log("they don't match!")
        }
    }
    submitSignupData = () => {
        // attempt to log in with the backend 
        fetch('http://localhost:3000/signup',{
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
                this.props.login() 
                this.props.changeAppLoggedIn(true)
                // this.props.handleLogin()
                this.props.history.push('/')
                
            }
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    render(){
        return (
            <span className={'form-outer'}>
            <h2> Sign Up </h2>
            <form className={'add-book'} onSubmit={this.handleSubmit}>
                <input type="text" name="email" placeholder="Email" onChange={this.handleInput} value={this.state.email} />
                <br></br>
                <input type="password" name="password" placeholder="Password" onChange={this.handleInput} value={this.state.password} />
                <br></br>
                <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={this.handleInput} value={this.state.confirmPassword} />
                <br></br>
                <input id="submit" type="submit" value="Submit" />
            </form>
        </span>
        ) 
    }
}

export default withRouter(connect(null,{login, logout})(Signup))
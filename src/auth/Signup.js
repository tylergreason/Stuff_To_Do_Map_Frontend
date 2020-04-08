import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { login, logout } from '../store/actions/authActions'
import { withRouter } from 'react-router'
class Signup extends Component {
    state = {
        user:{
            first_name:'',
            last_name:'',
            username:'',
            city:'',
            state:'',
            country:'',
            email:'', 
            password:'', 
            password_confirmation:''
        }
    }
    handleInput = (e) => {
        this.setState({
            ...this.state, 
            user:{
                ...this.state.user,
                [e.target.name]:e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email !== "" && this.state.password === this.state.password_confirmation){
            console.log("they match! ")
            this.createuser(this.state.user)
        }else{
            console.log("they don't match!")
        }
    }
    
    createuser = newUser => {
            fetch('http://localhost:3000/signup',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user: newUser})
            })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.log(data.error)
                }else if (data.token){
                        // if a token was returned, signup was successful and we can redirect
                        localStorage.setItem('auth_token',data.token)
                        this.props.login() 
                        this.props.changeAppLoggedIn(true)
                        this.props.history.push('/')
                    }
                })
        
                .catch((error) => {
                    console.error('Error:', error);
                    return false; 
            })
        }

    render(){
        return (
            <div className='informationBox'>
            <form>
                 <label>First Name: </label>
                <input  name='first_name' 
                    value={this.state.user.first_name} 
                    onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Last Name: </label>
                <input  name='last_name' 
                        value={this.state.user.last_name} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Username: </label>
                <input  name='username' 
                        value={this.state.user.username} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Email: </label>
                <br></br>
                <input  name='email' 
                        value={this.state.user.email} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>City </label>
                <br></br>
                <input  name='city' 
                        value={this.state.user.city} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>State: </label>
                <br></br>
                <input  name='state' 
                        value={this.state.user.state} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Country: </label>
                <br></br>
                <input  name='country' 
                        value={this.state.user.country} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Password: </label>
                <br></br>
                <input type="password" 
                        name="password" 
                        onChange={this.handleInput} 
                        value={this.state.user.password} 
                />
                <br></br>
                <label>Confirm Password:</label>
                <br></br>
                <input type="password" 
                        name="password_confirmation" 
                        onChange={this.handleInput} 
                        value={this.state.user.password_confirmation} 
                />
                <br></br>
                <button id="submit" 
                        type="submit" 
                        onClick={this.handleSubmit}>
                Sign Up</button>

            </form>
        </div>
        ) 
    }
}

export default withRouter(connect(null,{login, logout})(Signup))
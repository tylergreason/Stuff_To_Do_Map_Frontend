import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { login, logout, signUp } from '../store/actions/authActions'
import { withRouter } from 'react-router'
import { ServerResponseCard } from '../components/ServerResponseCard'

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
        }, 
        returnMessage:""
    }

    redirectToHomeIfLoggedIn = () => {
        if (this.props.loggedIn === true){
            this.props.history.push('/')
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

    returnMessage = message => {
        this.setState({
            returnMessage:message
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email !== "" && this.state.password === this.state.password_confirmation){
            this.props.signUp(this.state.user, this.returnMessage)
        }else{
        }
    }
    
    renderSignUpForm = () =>{
        return (
            <div className="signup">
            {/* <label>Sign Up</label> */}
            <div className='informationBox'>
            {this.redirectToHomeIfLoggedIn()}
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
                <label>City: </label>
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
                <label>Confirm Password: </label>
                <br></br>
                <input type="password" 
                        name="password_confirmation" 
                        onChange={this.handleInput} 
                        value={this.state.user.password_confirmation} 
                />
                <br></br>
                <ServerResponseCard response={this.state.returnMessage} />
                <button id="submit" 
                        class="signupButton"
                        type="submit" 
                        onClick={this.handleSubmit}>
                Sign Up</button>

            </form>
        </div>
        </div>
        ) 
    }
    render(){
        return (
            <>
            {this.renderSignUpForm()}
            </>
        ) 
    }
}
const mapStateToProps = state => {
    return {
        loggedIn:state.user.loggedIn
    }
}
export default withRouter(connect(mapStateToProps,{login, logout, signUp })(Signup))
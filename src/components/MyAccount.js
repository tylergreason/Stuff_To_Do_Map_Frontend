import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getUser, updateUser } from '../store/actions/UserActions'
class MyAccount extends Component { 
    state = {
        user:'', 
        receivedProps:false
    }
    componentDidMount = () => {
        this.props.getUser()
    }

    componentDidUpdate = (prevProps) =>{
        if (prevProps.user !== this.props.user && this.state.receivedProps !== true){
            this.setState({
                user:this.props.user,
                receivedProps:true
            })
        }
    }

    handleInput = e =>{
        e.preventDefault()
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                [e.target.name]:e.target.value
            } 
        })
    }

    handleSubmit = e =>{
        e.preventDefault() 
        this.props.updateUser(this.state.user)
    }

    render(){
        return( 
            <div className="MyAccount informationBox animated ">
            <form>
                <label>First Name: </label>
                <br></br>
                <input  name='first_name' 
                    value={this.state.user.first_name || ''} 
                    onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Last Name: </label>
                <br></br>
                <input  name='last_name' 
                        value={this.state.user.last_name || ''} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Username: </label>
                <br></br>
                <input  name='username' 
                        value={this.state.user.username || ''} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Email: </label>
                <br></br>
                <input  name='email' 
                        value={this.state.user.email || ''} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>City </label>
                <br></br>
                <input  name='city' 
                        value={this.state.user.city || ''} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>State: </label>
                <br></br>
                <input  name='state' 
                        value={this.state.user.state || ''} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Country: </label>
                <br></br>
                <input  name='country' 
                        value={this.state.user.country || ''} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>New Password: </label>
                <br></br>
                <input  name='new_password' 
                        type='password'
                        placeholder='not being used yet'
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Confirm New Password: </label>
                <br></br>
                <input  name='new_password_confirmation' 
                        type='password'
                        placeholder='not being used yet'
                        // value={this.state.user.country} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Current Password: </label>
                <br></br>
                <input  name='password' 
                        type='password'
                        value={this.state.user.password || ''}
                        onChange={this.handleInput}>
                </input>
                        <br></br>
                <button 
                    type='submit'
                    onClick={this.handleSubmit}
                    >Submit</button>
            </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {user: state.user.user}
}
export default connect(mapStateToProps, { getUser, updateUser })(MyAccount)
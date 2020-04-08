import React, { Component } from 'react' 
import EditPassword from './myAccount/EditPassword'
import { connect } from 'react-redux'
import { getUser, updateUser, updatePassword } from '../store/actions/UserActions'
class MyAccount extends Component { 
    state = {
        user:'', 
        receivedProps:false,
        returnMessage:''
    }
    
    // function for getting the message back from updating information 
    returnMessage = message => {
        this.setState({
            returnMessage:message
        })
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

    renderUpdateAccountForm = () => {
        return (
            <>
            <label>Update Account Information</label>
            <form className="informationBox">
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
                <label>*Current Password</label>
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
                    >Update Account Information</button>
            </form>
            </>
        )
    }


    renderUpdateEmailForm = () =>{
        return(
            <>
                <label>Update Email Address</label>
                <form className="informationBox">
                    <label>New Email: </label>
                    <br></br>
                    <input  name='email' 
                            value={this.state.user.email || ''} 
                            onChange={this.handleInput}>
                    </input>
                    <br></br>
                    <label>Confirm New Email: </label>
                    <br></br>
                    <input  name='email' 
                            value={this.state.user.email || ''} 
                            onChange={this.handleInput}>
                    </input>
                    <br></br>
                    <label>*Current Password</label>
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
                    >Update Email Address</button>
                </form>
            </>
        )
    }

    editPasswordProps = (user) => {
        return {
                id:user.id, 
                current_password:user.password, 
                password:user.new_password, 
                password_confirmation: user.password_confirmation
        }
    }

    render(){
        return( 
            <div className="MyAccount animated ">
                {this.renderUpdateAccountForm()}
                {/* {this.renderChangePasswordForm()} */}
                <EditPassword user={this.editPasswordProps(this.state.user)}/>
                {this.renderUpdateEmailForm()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {user: state.user.user}
}
export default connect(mapStateToProps, { getUser, updateUser, updatePassword })(MyAccount)
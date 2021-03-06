import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { updatePassword } from '../../store/actions/UserActions'
import { ServerResponseCard } from '../ServerResponseCard'

class EditPassword extends Component {
        state={
            user:{}, 
            returnMessage:""
        }
    // function for getting the message back from updating information 
    returnMessage = message => {
        this.setState({
            returnMessage:message
        })
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
    renderChangePasswordForm = () =>{
        return (
            <>
            <label>Change Password</label>
            <div className="informationBox MyAccount__child">
                <form>
                    <label>Current Password: </label>
                    <br></br>
                <input  name='password' 
                        type='password'
                        value={this.state.user.password || ''}
                        onChange={this.handleInput}>
                </input>
                        <br></br>
                <label>New Password: </label>
                <br></br>
                <input  name='new_password' 
                        type='password'
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Confirm New Password: </label>
                <br></br>
                <input  name='password_confirmation' 
                        type='password'
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <ServerResponseCard response={this.state.returnMessage} />
                <button 
                    type='submit'
                    onClick={this.handleUpdatePasswordSubmit}
                    >Change Password</button>
                </form>
            </div>
            </>
        )
    }

    handleUpdatePasswordSubmit = e => {
        e.preventDefault() 
        const dataToSubmit = {
            ...this.state.user,
            id:this.props.userId
        }
        console.log(dataToSubmit)
        this.props.updatePassword(dataToSubmit, this.returnMessage)
    }

    render(){
        return ( 
            <> 
                {this.renderChangePasswordForm()}
            </>
        )
    }
}

export default connect(null, {updatePassword})(EditPassword)
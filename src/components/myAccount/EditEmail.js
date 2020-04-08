import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { updatePassword } from '../../store/actions/UserActions'
class EditEmail extends Component {
        state={
            returnMessage:"",
            email:''
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
            email:{
                ...this.state.email, 
                [e.target.name]:e.target.value
            }
        })
    }
        renderUpdateEmailForm = () =>{
        return(
            <>
                <label>Update Email Address</label>
                <form className="informationBox">
                    <label>New Email: </label>
                    <br></br>
                    <input  name='new_email' 
                            // value={this.state.email || ''} 
                            onChange={this.handleInput}>
                    </input>
                    <br></br>
                    <label>Confirm New Email: </label>
                    <br></br>
                    <input  name='email_confirmation' 
                            // value={this.state.email_confirmation || ''} 
                            onChange={this.handleInput}>
                    </input>
                    <br></br>
                    <label>*Current Password</label>
                <br></br>
                <input  name='password' 
                        type='password'
                        // value={this.state.user.password || ''}
                        onChange={this.handleInput}>
                </input>
                        <br></br>
                <button 
                    type='submit'
                    onClick={this.handleUpdateEmailSubmit}
                    >Update Email Address</button>
                </form>
            </>
        )
    }

    handleUpdateEmailSubmit = e => {
        e.preventDefault() 
        const dataToSubmit = {
            ...this.state.email,
            id:this.props.userId
        }
        console.log(dataToSubmit)
        this.props.updatePassword(dataToSubmit, this.returnMessage)
    }

    render(){
        return ( 
            <> 
                {this.renderUpdateEmailForm()}
            </>
        )
    }
}

export default connect(null, {updatePassword})(EditEmail)
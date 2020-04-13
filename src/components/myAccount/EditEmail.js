import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { updateEmail, getUser } from '../../store/actions/UserActions'
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
                <label>Current Email Address</label>
                <label> - {this.props.currentEmail}</label>
                <br></br>
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
                <input  name='current_password' 
                        type='password'
                        // value={this.state.user.password || ''}
                        onChange={this.handleInput}>
                </input>
                        <br></br>

                        <div>{`${this.state.returnMessage}`}</div>

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
        this.props.updateEmail(dataToSubmit, this.returnMessage)
        // run getUser so user info updates in the store and current email updates above 
        this.props.getUser()
    }

    render(){
        return ( 
            <div className="middlePageBox"> 
                {this.renderUpdateEmailForm()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        currentEmail:state.user.user.email
    }
}
export default connect(mapStateToProps, {updateEmail, getUser })(EditEmail)
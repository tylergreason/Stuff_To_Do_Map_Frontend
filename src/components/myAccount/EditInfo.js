import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { getUser, updateUser } from '../../store/actions/UserActions'
class EditInfo extends Component {
        state={
            user:{},
            returnMessage:""
        }

    componentDidMount = () =>{
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

    handleUpdateInfoSubmit = e => {
        e.preventDefault() 
        const dataToSubmit = {
            ...this.state.user
        }
        console.log(dataToSubmit)
        this.props.updateUser(dataToSubmit, this.returnMessage)
    }

    renderUpdateInfoForm = () => {
        return (
            <>
            <label>Update Account Information</label>
            <form className="informationBox">
                <label>First Name: </label>
                <br></br>
                <input  name='first_name' 
                    value={this.state.user.first_name} 
                    onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Last Name: </label>
                <br></br>
                <input  name='last_name' 
                        value={this.state.user.last_name} 
                        onChange={this.handleInput}>
                </input>
                <br></br>
                <label>Username: </label>
                <br></br>
                <input  name='username' 
                        value={this.state.user.username} 
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
                <label>Current Password</label>
                <br></br>
                <input  name='password' 
                        type='password'
                        value={this.state.user.password}
                        onChange={this.handleInput}>
                </input>
                        <br></br>
                <div>{this.state.returnMessage}</div>
                <button 
                    type='submit'
                    onClick={this.handleUpdateInfoSubmit}
                    >Update Account Information</button>
            </form>
            </>
        )
    }
    render(){
        return ( 
            <> 
                {this.renderUpdateInfoForm()}
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        user:state.user.user
    }
}
export default connect(mapStateToProps, { getUser, updateUser })(EditInfo)
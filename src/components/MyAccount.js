import React, { Component } from 'react' 
import EditPassword from './myAccount/EditPassword'
import EditEmail from './myAccount/EditEmail'
import EditInfo from './myAccount/EditInfo'

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

    render(){
        return( 
            <div className="MyAccount animated ">
                <EditInfo />
                {/* {this.renderChangePasswordForm()} */}
                <EditPassword userId={this.state.user.id}/>
                <EditEmail userId={this.state.user.id}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {user: state.user.user}
}
export default connect(mapStateToProps, { getUser, updateUser, updatePassword })(MyAccount)
import React, {Component} from 'react' 
import { connect } from 'react-redux' 
import { deleteUser } from '../../store/actions/UserActions'
import { withRouter } from 'react-router'



class DeleteAccount extends Component {
    state = {
        password:'',
        save_attractions:null,
        returnMessage:""
    }

    // redirect to login if deletion was successful 
    componentDidUpdate = () =>{
        if (this.state.returnMessage === "User deleted"){
            localStorage.clear()
            this.props.history.push('/login')
        }
    }

    // function for getting the message back from updating information 
    returnMessage = message => {
        this.setState({
            returnMessage:message
        })
    }

    handleInput = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleKeepAttractionsSelect = (e) => {
        e.target.value === 'yes' 
        ?
        this.setState({
            save_attractions:true
        })
        :
        this.setState({
            save_attractions:false
        })
    }

    renderPasswordInputs = () => {
        return (
            <>
                <label>Password</label>
                <input  name='password' 
                type='password'
                value={this.state.password || ''}
                onChange={this.handleInput}>
                </input>
            </>
        )
    }

    renderUserChoice = () =>{
        if (this.state.save_attractions === true){
            return (<div>Yes, save my attractions for others to see!</div>)
        } else if (this.state.save_attractions === false){
            return (<div>No, I want to delete all my attractions along with my account!</div>)
        }
    }

    renderKeepAttractionsSelect = () =>{
        return(
            <div>
                <div>Would you like to keep the attractions you have made for others to continue to see?</div>
                <button value='yes' onClick={this.handleKeepAttractionsSelect}>Yes</button>
                <button value='no' onClick={this.handleKeepAttractionsSelect}>No</button>
                {/* keep attractions select */}
            </div>
        )
    }

    renderDeleteAccountButton = () => {
        return( 
            <button
                onClick={this.handleDeleteAccountSubmit}
            >Delete Account</button>
        )
    }

    handleDeleteAccountSubmit = (e) =>{
        e.preventDefault()
        const user = {
            id:this.props.userId,
            password:this.state.password, 
            save_attractions:this.state.save_attractions
        }
        this.props.deleteUser(user,this.returnMessage)
    }
    render(){
        return(
            <>
                <label>Delete Account</label>
                <div className="informationBox">
                    {this.renderKeepAttractionsSelect()}
                    {this.renderUserChoice()}
                    {this.renderPasswordInputs()}
                    <div>{this.state.returnMessage}</div>
                    {this.renderDeleteAccountButton()}
                </div>
            </>

        )
    }
}

export default withRouter(connect(null,{ deleteUser })(DeleteAccount))
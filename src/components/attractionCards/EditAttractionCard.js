import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { updateAttraction } from '../../store/actions/MapActions'
import { ServerResponseCard } from '../ServerResponseCard'

class EditAttractionCard extends Component {
    state = {
        attraction:"",
        serverResponse:[]
    }

    handleInput = (e) => {
        this.setState({
            ...this.state, 
            attraction: {
                ...this.state.attraction,
                [e.target.name]:e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateAttraction(this.state.attraction, this.setServerResponse)
    }
    
    componentDidMount = () =>{
        // set state to attraction so the form is already filled 
        if (this.props.attraction !== undefined){
            this.setState({
                attraction:this.props.attraction
            })
        }
    }
    componentDidUpdate = () => {
        if (this.state.serverResponse === "Success"){
            this.props.backToList()
        }
    }

    setServerResponse = (message) =>{
        this.setState({
            serverResponse:message
        })
    }

    render(){
        return (
            <div className=" AttractionListCard editAttractionForm">
            <form>
                <label>Name: </label>
                <br></br>
                <input 
                    name="name" 
                    value={this.state.attraction.name || ""}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>Description:</label>
                <br></br>
                <textarea rows='4'
                    name="description" 
                    value={this.state.attraction.description || ""}
                    onChange={this.handleInput}
                ></textarea>
                <br></br>
                {/* removed ability to edit attraction location */}
                {/* <input 
                    name="house_number" 
                    value={this.state.attraction.house_number}
                    onChange={this.handleInput}
                ></input>
                <input 
                    name="road" 
                    value={this.state.attraction.road}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <input 
                    name="city" 
                    value={this.state.attraction.city}
                    onChange={this.handleInput}
                ></input>
                <input 
                    name="state" 
                    value={this.state.attraction.state}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <input 
                    name="country" 
                    value={this.state.attraction.country}
                    onChange={this.handleInput}
                ></input> */}
                <br></br>
                <ServerResponseCard response={this.state.serverResponse} />
                <button 
                    type='submit'
                    onClick={this.handleSubmit}
                >Save Changes</button>
            </form>
            </div>
        )
    }
}

export default connect(null,{ updateAttraction })(EditAttractionCard)
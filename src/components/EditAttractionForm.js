import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { updateAttraction } from '../store/actions/MapActions'
// import make new attraction action and edit attraction actions 


class EditAttractionForm extends Component {
    state = {
        attraction:""
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
        this.props.updateAttraction(this.state.attraction)
        this.props.backToList()
    }

    componentDidMount = () =>{
            // set state to attraction so the form is already filled 
            if (this.props.attraction !== undefined){
                this.setState({
                    attraction:this.props.attraction
                })
            }
        }

    render(){
        return (
            <>
            <button onClick={this.props.backToList}>Go Back</button>
            <form>
                <input 
                    name="name" 
                    value={this.state.attraction.name}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <input 
                    name="description" 
                    value={this.state.attraction.description}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <input 
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
                ></input>
                <br></br>
                <button 
                    type='submit'
                    onClick={this.handleSubmit}
                >Save Changes</button>
            </form>
            </>
        )
    }
}

export default connect(null,{ updateAttraction })(EditAttractionForm)
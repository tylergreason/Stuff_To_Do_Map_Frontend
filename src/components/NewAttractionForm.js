import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { addAttraction } from '../store/actions/MapActions'
// import make new attraction action and edit attraction actions 


class NewAttractionForm extends Component {
    state = {
        attraction:""
    }
    componentDidMount = () =>{
        this.setState({ 
            attraction:{
                name:'Attraction name',
                description:'Description',
                house_number:'House number', 
                road:'Road',
                city:'City', 
                state:'State', 
                country:'Country'
            }
        })
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
        this.props.addAttraction(this.state.attraction)
    }

    render(){
        return (
            <>
            <button onClick={this.props.backToList}>Go Back</button>
            <form>
                <input 
                    name="name" 
                    placeholder={this.state.attraction.name}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <input 
                    name="description" 
                    placeholder={this.state.attraction.description}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <input 
                    name="house_number" 
                    placeholder={this.state.attraction.house_number}
                    onChange={this.handleInput}
                ></input>
                <input 
                    name="road" 
                    placeholder={this.state.attraction.road}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <input 
                    name="city" 
                    placeholder={this.state.attraction.city}
                    onChange={this.handleInput}
                ></input>
                <input 
                    name="state" 
                    placeholder={this.state.attraction.state}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <input 
                    name="country" 
                    placeholder={this.state.attraction.country}
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

export default connect(null, { addAttraction })(NewAttractionForm)
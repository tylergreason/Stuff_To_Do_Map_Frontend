import React, { Component } from 'react' 
import { connect } from 'react-redux' 
// import make new attraction action and edit attraction actions 


class NewEditAttractionForm extends Component {
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

    componentDidMount = () =>{
        if (this.props.attraction){
            // set state to attraction so the form is already filled 
            this.setState({
                attraction:{
                    name:this.props.attraction.name,
                    description:this.props.attraction.description,
                    house_number:this.props.attraction.house_number, 
                    road:this.props.attraction.road,
                    city:this.props.attraction.city, 
                    state:this.props.attraction.state, 
                    country:this.props.attraction.country
                }
            })
        }else{ 
            // make an object for placeholder values 
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
    }
    render(){
        return (
            <form>
                <input 
                    name="name" 
                    placeholder={this.state.attraction.name}
                    onChange={this.handleInput}
                    ></input>
            </form>
        )
    }
}

export default NewEditAttractionForm
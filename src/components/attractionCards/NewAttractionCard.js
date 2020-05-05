import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { addAttraction } from '../../store/actions/AttractionActions'
import { ServerResponseCard } from '../ServerResponseCard'

import { getAttractionListShown } from '../../store/actions/generalActions'
import { toggleAttractionListShow } from '../../generalFunctions'

class NewAttractionForm extends Component {
    state = {
        attraction:{
            name:'',
            description:'',
            house_number:'', 
            road:'',
            city:'', 
            state:'', 
            country:'',
            lat:'',
            lng:''
        }, 
        returnMessage:[]
    }

    componentDidUpdate = prevProps => {
        if (this.props.newAttraction !== undefined){
            if (prevProps.newAttraction !== this.props.newAttraction){
                console.log(this.props.newAttraction)
                console.log('attraction address updated')
                this.props.getAttractionListShown() 
                toggleAttractionListShow()
                return this.updateNewAttractionAddress(this.props.newAttraction)
            }
        }
        // check if response didn't contain error and isn't blank 
        if (this.state.returnMessage.success){
                this.props.backToList();
            } 
        }
    

    updateNewAttractionAddress = newAddress => {
        // create variable to hold bridgeObjectData 
        const bridgeObject = {} 
        // create an array of data points we want from the new address 
        let keys = ['house_number','road','city','state','country','lat','lng']; 
        // set all the bridge objects keys that we want from the API equal to this state's data so none goes missing 
        keys.forEach(key => bridgeObject[key] = this.state.attraction[key])
        //  loop through keys, and for each key that newAddress has that isn't undefined, set this.state.key to that 
        keys.forEach(key => { 
            if (newAddress[key] !== undefined && newAddress[key] !== "" && newAddress[key] !== this.state.attraction[key]){
                bridgeObject[key] = newAddress[key]
            }
        })
        // console.log(bridgeObject)
        this.setState({
            ...this.state, 
            attraction:{
                ...this.state.attraction,
                house_number:bridgeObject.house_number,
                road:bridgeObject.road,
                city:bridgeObject.city, 
                state: bridgeObject.state, 
                country: bridgeObject.country,
                lat:bridgeObject.lat,
                lng:bridgeObject.lng
                // [key]:newAddress[key]
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

    returnMessage = (message) =>{
        this.setState({
            returnMessage:message
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        console.log(this.state.attraction)
        this.props.addAttraction(this.state.attraction,this.returnMessage)
    }

    render(){
        return (
            <div className="informationBox newAttractionForm">
            <form
                onSubmit={this.handleSubmit}
            >
                <label>Name</label>
                <br></br>
                <input 
                    name="name" 
                    value={this.state.attraction.name}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>Description</label>
                <br></br>
                <textarea rows='4'
                    name="description" 
                    value={this.state.attraction.description}
                    onChange={this.handleInput}
                ></textarea>
                <br></br>
                <label>Building Number</label>
                <br></br>
                <input 
                    name="house_number" 
                    value={this.state.attraction.house_number}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>Street</label>
                <br></br>
                <input 
                    name="road" 
                    value={this.state.attraction.road}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>City</label>
                <br></br>
                <input 
                    name="city" 
                    value={this.state.attraction.city}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>State</label>
                <br></br>
                <input 
                    name="state" 
                    value={this.state.attraction.state}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>Country</label>
                <br></br>
                <input 
                    name="country" 
                    value={this.state.attraction.country}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <ServerResponseCard response={this.state.returnMessage} />
                <button 
                    type='submit'
                >Save Changes</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newAttraction: state.map.newAddress
    }
}

export default connect(mapStateToProps, { addAttraction, getAttractionListShown })(NewAttractionForm)
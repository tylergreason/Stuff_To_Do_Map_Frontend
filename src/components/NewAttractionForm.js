import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { addAttraction } from '../store/actions/AttractionActions'


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
        }
    }

    componentDidUpdate = prevProps => {
        if (this.props.newAttraction !== undefined){
            if (prevProps.newAttraction !== this.props.newAttraction){
                console.log(this.props.newAttraction)
                console.log('attraction address updated')
                return this.updateNewAttractionAddress(this.props.newAttraction)
            }
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

    handleSubmit = (e) => {
        e.preventDefault() 
        // verify lat and lng aren't blank 
        if (this.state.attraction.lat !== '' && this.state.attraction.lng !== ''){
            this.props.addAttraction(this.state.attraction)
        }
        this.props.backToList()
    }

    render(){
        return (
            <div className="newAttraction">
            <form>
                <label>Name</label>
                <input 
                    name="name" 
                    value={this.state.attraction.name}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>Description</label>
                <input 
                    name="description" 
                    value={this.state.attraction.description}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>Building Number</label>
                <input 
                    name="house_number" 
                    value={this.state.attraction.house_number}
                    onChange={this.handleInput}
                ></input>
                <label>Street</label>
                <input 
                    name="road" 
                    value={this.state.attraction.road}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>City</label>
                <input 
                    name="city" 
                    value={this.state.attraction.city}
                    onChange={this.handleInput}
                ></input>
                <label>State</label>
                <input 
                    name="state" 
                    value={this.state.attraction.state}
                    onChange={this.handleInput}
                ></input>
                <br></br>
                <label>Country</label>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newAttraction: state.newAddress
    }
}

export default connect(mapStateToProps, { addAttraction })(NewAttractionForm)
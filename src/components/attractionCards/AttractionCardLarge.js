import React, { Component } from 'react' 
import { connect } from 'react-redux'

const cardClass = "AttractionCardLarge animated fadeIn"

class AttractionCardLarge extends Component {

    componentDidMount = () =>{
        
    }
    render(){
        return (
        <div className={cardClass}>
            {/* <h1>ATTRACTION CARD LARGE</h1> */}
            <div className="AttractionCardLargeInner informationBox">

                <h4 className="name">{this.props.attraction.name}</h4>
                <span className="cardRating"> - {this.props.attraction.average_rating}⭐️</span>
                <span className="address">
                {`${this.props.attraction.house_number} ${this.props.attraction.road}, ${this.props.attraction.city}, ${this.props.attraction.state}, ${this.props.attraction.country}`}
                </span>
                <p className="description">DESC {this.props.attraction.description}</p>
            </div>
        </div>)
    }
}

export default AttractionCardLarge
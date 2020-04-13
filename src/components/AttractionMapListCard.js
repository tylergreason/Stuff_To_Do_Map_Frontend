import React,{Component} from 'react' 
import { toggleIconHoveredClass } from '../generalFunctions'

const cardClass = "AttractionListCard animated fadeIn"

class AttractionMapListCard extends Component{
    
    cardClick = () => {
            this.props.onClick(this.props.attraction)
            toggleIconHoveredClass(this.props.attraction.id)
    }
    
    render(){
        return (
            <div 
            id={`attractionMapListCard${this.props.attraction.id}`}
            // feed the attraction's id back on click so the attraction list can fetch it and render its info  
            // onClick={()=>toggleHoveredClass(this.props.attraction.id)}
            onClick={this.cardClick}
            className={cardClass}>
            <h4 className="name">{this.props.attraction.name}</h4>
            <span className="cardRating"> - {this.props.attraction.average_rating}⭐️</span>
            <span className="address">
            {`${this.props.attraction.house_number} ${this.props.attraction.road}, ${this.props.attraction.city}, ${this.props.attraction.state}, ${this.props.attraction.country}`}
            </span>
            <p className="description">{this.props.attraction.description}</p>
        </div>)
        }
}

export default AttractionMapListCard
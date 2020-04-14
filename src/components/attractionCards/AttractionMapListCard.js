import React,{Component} from 'react' 
import { toggleIconHoveredClass } from '../../generalFunctions'
import { renderAddress, renderRating } from './attractionCardGeneralFunctions'


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
            {renderRating(this.props.attraction)}
            {renderAddress(this.props.attraction)}
            <p className="description">{this.props.attraction.description}</p>
        </div>)
        }
}

export default AttractionMapListCard
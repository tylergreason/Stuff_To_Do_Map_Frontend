import React from 'react' 

const cardClass = "AttractionListCard animated fadeIn"

const AttractionMapListCard = (props) => {
    return (
        <div 
            id={`attractionMapListCard${props.attraction.id}`}
            // feed the attraction's id back on click so the attraction list can fetch it and render its info  
            onClick={() => props.onClick(props.attraction)}
                className={cardClass}>
            <h4 className="name">{props.attraction.name}</h4>
            <span className="cardRating"> - {props.attraction.average_rating}⭐️</span>
            <span className="address">
            {`${props.attraction.house_number} ${props.attraction.road}, ${props.attraction.city}, ${props.attraction.state}, ${props.attraction.country}`}
            </span>
            <p className="description">{props.attraction.description}</p>
        </div>)
}

export default AttractionMapListCard
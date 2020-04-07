import React from 'react' 

const cardClass = "AttractionListCard animated slideInLeft faster"

const AttractionMapListCard = (props) => {
    return (
        <div id={`attractionMapListCard${props.attraction.id}`} className={cardClass}>
            <h4 className="name">{props.attraction.name}</h4>
            <span className="address">
            {` - ${props.attraction.house_number} ${props.attraction.road}, ${props.attraction.city}, ${props.attraction.state}, ${props.attraction.country}`}
            </span>
            <p className="description">{props.attraction.description}</p>
        </div>)
}

export default AttractionMapListCard
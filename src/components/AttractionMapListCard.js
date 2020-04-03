import React from 'react' 

const AttractionMapListCard = (props) => {
    return (
        <div id={`attractionMapListCard${props.attraction.id}`}>
            <h4>{props.attraction.name}</h4>
            {`${props.attraction.house_number} ${props.attraction.road}, ${props.attraction.city}, ${props.attraction.state}, ${props.attraction.country}`}
            <br></br>
            {props.attraction.description}
        </div>)
}

export default AttractionMapListCard
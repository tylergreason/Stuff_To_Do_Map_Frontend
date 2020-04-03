import React from 'react' 

const MyAttractionListCard = (props) => {
    return(
    <div>
        {props.attraction.name}
        <br></br>
        {props.attraction.description}
    </div>)
}

export default MyAttractionListCard
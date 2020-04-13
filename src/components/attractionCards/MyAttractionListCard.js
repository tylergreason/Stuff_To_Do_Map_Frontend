import React from 'react' 
import Button from '../general/Button'
import { connect } from 'react-redux'
import { deleteAttraction } from '../../store/actions/MapActions'
import { toggleIconHoveredClass, toggleHoveredClass } from '../../generalFunctions'
import { mapVariable } from '../maps/mapFunctions'


const MyAttractionListCard = (props) => {

    const deleteAttraction = (e) => {
        e.preventDefault()
        // use .name to get the id of the attraction to be destroyed
        console.log(e.target.name)
        props.deleteAttraction(e.target.name)
    }

    return(
    <div 
        className="AttractionListCard animated fadeIn faster" 
        id={`AttractionListCard${props.attraction.id}`}
        onClick={() => {
                toggleIconHoveredClass(props.attraction.id)
                toggleHoveredClass("AttractionListCard", props.attraction.id)
                mapVariable.setView({lat: props.attraction.lat,lng: props.attraction.lng})
                // props.map.setView({lat: props.attraction.lat,lng: props.attraction.lng})
            }}
    >
        <h4 className="name">{props.attraction.name}</h4>
        <span> - {props.attraction.average_rating || 'No reviews yet'}⭐️</span>
        <span className="address">
            {`${props.attraction.house_number} ${props.attraction.road}, ${props.attraction.city}, ${props.attraction.state}, ${props.attraction.country}`}
            </span>
            <p className="description">{props.attraction.description}</p>
        <br></br>
        {<Button 
            text={"🗑"}
            name={props.attraction.id}
            onClick={deleteAttraction}
        ></Button>}
        {<Button 
            text={"✏️"}
            name={props.attraction.id}
            onClick={props.editClick}
        ></Button>}
    </div>)
}

export default connect(null, {deleteAttraction })(MyAttractionListCard)
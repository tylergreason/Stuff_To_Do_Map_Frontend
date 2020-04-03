import React from 'react' 
import Button from './general/Button'
import { connect } from 'react-redux'
import { deleteAttraction } from '../store/actions/MapActions'
const MyAttractionListCard = (props) => {

    const deleteAttraction = (e) => {
        e.preventDefault()
        // use .name to get the id of the attraction to be destroyed
        console.log(e.target.name)
        props.deleteAttraction(e.target.name)
    }

    return(
    <div>
        {props.attraction.name}
        <br></br>
        {props.attraction.description}
        <br></br>
        {<Button 
            text={"delete attraction"}
            name={props.attraction.id}
            onClick={deleteAttraction}
        ></Button>}
        {<Button 
            text={"edit attraction"}
            name={props.attraction.id}
            onClick={props.editClick}
        ></Button>}
    </div>)
}

export default connect(null, {deleteAttraction })(MyAttractionListCard)
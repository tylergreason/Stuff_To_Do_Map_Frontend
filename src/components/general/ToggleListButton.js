import React from 'react' 
import { attractionListStatus } from '../../generalFunctions'
import { toggleAttractionListShow } from '../../generalFunctions'

const buttonText = () => {
    // Set button text depending on if the list has the showList class
    return attractionListStatus() === true
    ?
    "Show Attractions"
    :
    "Hide Attractions"
}

const ToggleListButton = (props) => {
    return(
        <button
            className="toggleListButton"
            onClick={() => toggleAttractionListShow()}
        >
           {props.text} 
        </button>
    )
}

export default ToggleListButton
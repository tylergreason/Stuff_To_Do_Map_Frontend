import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractionListShown } from '../../store/actions/generalActions'
import { toggleAttractionListShow } from '../../generalFunctions'


class ToggleListButton extends Component {
    componentDidMount = () => {
        // set button text upon mounting 
        this.buttonText()
    }

    buttonText = () => {
        // set whether the button text is 'show' or 'hide' 'attractions' based on if the list is shown or not 
        if (this.props.showList === true){
            return "Hide Attractions"
        }else{
            return "Show Attractions"
        }
    }

    handleClick = () => {
        toggleAttractionListShow() 
        this.props.getAttractionListShown()
        this.buttonText()
    }

    render(){
        return(
            <button
            className="toggleListButton"
            onClick={() => this.handleClick()}
            >
                {this.buttonText()} 
                </button>
            )
    }
}

const mapStateToProps = state => {
    return {
        showList: state.general.showList
    }
}


export default connect(mapStateToProps, { getAttractionListShown })(ToggleListButton)
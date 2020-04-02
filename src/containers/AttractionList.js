import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../actions/MapActions'

class AttractionList extends Component {   
    renderAttractionCards = () => {
        
    }
    render(){
        return(<>attraction list</>)
    }
}


const mapStateToProps = state => {
    return {attractions: state.map.attractions}
}
export default connect(mapStateToProps, { getAttractions })(AttractionList)
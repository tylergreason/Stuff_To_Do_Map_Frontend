import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { getMyAttractions } from '../store/actions/MapActions'

class  MyAttractionList extends Component {


    componentDidMount = () => {
        this.props.getMyAttractions()
    }
    render(){return(
        <>
        <h2>My Attractions</h2>
        </>
    )
    }
}

const mapStateToProps = state => {
    return {myAttractions: state.myAttractions}
}

export default connect(mapStateToProps, { getMyAttractions })(MyAttractionList)
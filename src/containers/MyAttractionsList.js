import React, { Component } from 'react'
import MyAttractionListCard from '../components/MyAttractionListCard'


import { connect } from 'react-redux' 
import { getMyAttractions } from '../store/actions/MapActions'

class  MyAttractionList extends Component {

    renderMyAttractions = () => {
        if (this.props.myAttractions !== undefined){
            return this.props.myAttractions.map(attraction => {
                return <MyAttractionListCard attraction={attraction} />
            })
        }
    }

    componentDidMount = () => {
        this.props.getMyAttractions()
    }
    render(){return(
        <>
            <h2>My Attractions</h2>
            {this.renderMyAttractions(this.props.myAttractions)}
        </>
    )
    }
}

const mapStateToProps = state => {
    return {myAttractions: state.myAttractions}
}

export default connect(mapStateToProps, { getMyAttractions })(MyAttractionList)
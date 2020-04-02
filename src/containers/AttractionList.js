import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../actions/MapActions'
import AttractionMapListCard from '../components/AttractionMapListCard'

class AttractionList extends Component {   
    renderAttractionCards = () => {
        return this.props.attractions.map(attraction => {
            console.log(attraction)
            return <AttractionMapListCard attraction={attraction}/> 
        })
    }
    render(){
        return(<>
            <h3>
                attraction list
            </h3>
            {this.renderAttractionCards()}
        </>)
    }
}


const mapStateToProps = state => {
    return {attractions: state.map.attractions}
}
export default connect(mapStateToProps, { getAttractions })(AttractionList)
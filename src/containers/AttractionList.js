import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../actions/MapActions'
import AttractionMapListCard from '../components/AttractionMapListCard'

class AttractionList extends Component {   
    renderAttractionCards = () => {
        return this.props.attractions.map(attraction => {
            return <AttractionMapListCard key={attraction.id} attraction={attraction}/> 
        })
    }
    render(){
        return(<div className="AttractionList">
            <h3>
                attraction list
            </h3>
            {this.renderAttractionCards()}
        </div>)
    }
}


const mapStateToProps = state => {
    return {attractions: state.map.attractions}
}
export default connect(mapStateToProps, { getAttractions })(AttractionList)
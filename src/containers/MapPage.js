import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../store/actions/MapActions'

// two containers to render 
import AttractionList from './AttractionList'
import Map from '../components/Map'

class MapPage extends Component {  
    state = {
        bounds:''
    }

    // make function to return bounds and set them to this state, then fire getAttractions with those bounds as the argument 
    setBounds = (bounds) => {
        const attractionBounds = this.parseBounds(bounds)
        this.props.getAttractions(attractionBounds)
        console.log(attractionBounds)
        this.setState({
            bounds:attractionBounds
        })
    }

    // function to parse what's brought back by getBounds() into useable format 
    parseBounds = (bounds) => {
        const newBounds =  { 
            south: bounds._southWest.lat,
            north: bounds._northEast.lat,
            east: bounds._northEast.lng, 
            west: bounds._southWest.lng
        }
        console.log(bounds)
        return newBounds
        // return [bounds._southWest, bounds._northEast]
    }

    componentDidMount = () => {
        this.props.getAttractions(this.state.bounds)
    }

    render(){
        return(
        <>
        <h1>Map Page</h1>
            <AttractionList attractions={this.props.attractions}/>
            <Map 
                attractions={this.props.attractions}
                setBounds={this.setBounds}
                parseBounds={this.parseBounds}
            />
        </>
        )
    }
}


const mapStateToProps = state => {
    return {attractions: state.map.attractions}
}
export default connect(mapStateToProps, { getAttractions })(MapPage)
import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../store/actions/MapActions'

// two containers to render 
import AttractionList from './AttractionList'
import Map from '../components/Map'

class MapPage extends Component {  
    state = {
        bounds:'', 
        attractions:''
    }
    
    // make function to return bounds and set them to this state, then fire getAttractions with those bounds as the argument 
    setBounds = (bounds) => {
        const attractionBounds = this.parseBounds(bounds)
        this.props.getAttractions(attractionBounds)
        this.setState({
            bounds:attractionBounds
        })
    }

    // function to parse what's brought back by getBounds() into useable format 
    parseBounds = (bounds) => {
            return { 
            south: bounds._southWest.lat,
            north: bounds._northEast.lat,
            east: bounds._northEast.lng, 
            west: bounds._southWest.lng
        }
    }


    componentDidUpdate = (prevProps) => { 
        if (prevProps.attractions !== this.props.attractions){
            this.setState({
                attractions:this.props.attractions
            })
        }
    }

    render(){
        return(
        <>
        <h3>Map Page</h3>
            <AttractionList 
                attractions={this.state.attractions}
            />
            <Map 
                attractions={this.state.attractions}
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
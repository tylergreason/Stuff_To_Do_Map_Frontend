import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../store/actions/MapActions'

// two containers to render 
import AttractionList from './AttractionList'
import Map from '../components/maps/Map'

import { fetchOTMData } from '../otmFunctions'

class MapPage extends Component {  
    state = {
        bounds:'', 
        attractions:'',
        otmAttractions:'',
        otmBoundsThreshold:5
    }
    
    // setOTMAttractions sets the otmAttractions state attribute to the OTM attractions returned in otmFunctions
    setOTMAttractions = data =>{
        this.setState({
            otmAttractions:data
        })
    }

    queryOTMAttractions = (attractionBounds) => {
        if (this.checkBounds(attractionBounds)){
            // use setOTMAttractions to set this state to the return data 
            fetchOTMData(attractionBounds, this.setOTMAttractions)
        }else{
            this.setState({
                otmAttractions:''
            })
        }

    }
    // make function to return bounds and set them to this state, then fire getAttractions with those bounds as the argument 
    setBounds = (bounds) => {
        const attractionBounds = this.parseBounds(bounds)
        this.props.getAttractions(attractionBounds)
        this.setState({
            bounds:attractionBounds,
        })
        this.queryOTMAttractions(attractionBounds)
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
    
    // check if map bounds are within threshold of finding otm data 
    checkBounds = bounds =>{
        if (Math.abs(bounds.north) - Math.abs(bounds.south) > this.state.otmBoundsThreshold){
            console.log('Scroll in farther to see OTM data')
            return false; 
        } else {
            return true; 
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
            <AttractionList 
                attractions={this.state.attractions}
                otmAttractions={this.state.otmAttractions}
            />
            <Map 
                attractions={this.state.attractions}
                otmAttractions={this.state.otmAttractions}
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
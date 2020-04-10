import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../store/actions/MapActions'

// two containers to render 
import AttractionList from './AttractionList'
import Map from '../components/Map'
console.log(process.env.REACT_APP_MAPBOX_API_KEY)
class MapPage extends Component {  
    state = {
        bounds:'', 
        attractions:''
    }
    
    // make function to return bounds and set them to this state, then fire getAttractions with those bounds as the argument 
    setBounds = (bounds) => {
        const attractionBounds = this.parseBounds(bounds)
        this.fetchOTMData(attractionBounds)
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

    fetchOTMData = (attractionBounds) => {
        console.log(attractionBounds)
        const latMin = attractionBounds.south;  
        const latMax = attractionBounds.north; 
        const lngMin = attractionBounds.west;
        const lngMax = attractionBounds.east;
        const APIKey = process.env.REACT_APP_OTM_API_KEY
        const OTMURL = this.createOTMURL(latMin,latMax,lngMin,lngMax,APIKey)
        // make sure the map is zoomed in close enough to not return one million attractions 
        if (Math.abs(latMax) - Math.abs(latMin) < .2){
            fetch(OTMURL)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.features[0].properties.xid){
                    const xid = data.features[0].properties.xid
                    this.fetchWikiData(xid)
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
    }

    fetchWikiData = xid => {
        const WikiDataURL = this.createWikiDataURL(xid, process.env.REACT_APP_OTM_API_KEY)
        fetch(WikiDataURL)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    createOTMURL = (latMin,latMax,lngMin,lngMax,APIKey) => {
        return `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lngMin}&lon_max=${lngMax}&lat_min=${latMin}&lat_max=${latMax}&kinds=historic_districts&apikey=${APIKey}`
    }
    createWikiDataURL = (xid,APIKey)=>{
        return `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${APIKey}`
    }
    render(){
        return(
        <div>
            <AttractionList 
                attractions={this.state.attractions}
            />
            <Map 
                attractions={this.state.attractions}
                setBounds={this.setBounds}
                parseBounds={this.parseBounds}
            />
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {attractions: state.map.attractions}
}
export default connect(mapStateToProps, { getAttractions })(MapPage)
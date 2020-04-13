import React, { Component } from 'react' 
import L from 'leaflet';
import { connect } from 'react-redux'
import { userIcon, iconWithCustomText } from '../icons/Icons'
import { getAttraction } from '../store/actions/AttractionActions'
import { toggleHoveredClass } from '../generalFunctions'

class Map extends Component {
    state = {
        map:"",
        southWestBounds:'', 
        northEastBounds:''
    }

    componentDidMount = () => {
        // map must be set to this.map to access Leaflet functions 
        this.map = this.createMap()
        // add layer to this.map so we can control the attractions that are rendered 
        this.attractionLayer = L.layerGroup().addTo(this.map)
        // get user location and set view to it 
        // this.map.locate({setView:true, enableHighAccuracy:true})
    }

    renderAttractionMarkers = (map) => {
        // clear the layer of attractions before rendering new attractions 
        this.attractionLayer.clearLayers()
        // iterate through attractions in props and make markers for each attraction 
        if (this.props.attractions){
            return this.props.attractions.map(attraction => {
                const lat = attraction.lat 
                const lng = attraction.lng 

                this.marker = L.marker([lat,lng],{icon: iconWithCustomText(`${attraction.name}`,`${attraction.id}`)})
                // set click function 
                this.marker.on('click', this.handleMarkerClick)
                this.marker.id = attraction.id 
                // this.marker.bindPopup(this.renderPopupText(attraction)).openPopup()
                return this.marker.addTo(this.attractionLayer)
            })
        }
    }

    handleMarkerClick = e => {
        this.props.getAttraction(e.target.id)
        toggleHoveredClass(e.target.id)
        const cardId = `attractionMapListCardLarge${e.target.id}`
        const cardToView = document.getElementById(cardId) 
        // cardToView.scrollIntoView()
    }

    // create popup marker 
    // not being used anymore in favor of CSS hover 
    renderPopupText = (attraction) => {
        return `<div class="popupName">${attraction.name}</div>
        <div class=popupText></div>`
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.attractions !== this.props.attractions){
            this.renderAttractionMarkers(this.state.map)
        }
    }

    onMapChange = (e) => {
        const bounds = e.target.getBounds() 
        this.setState({
            southWestBounds:bounds._southWest, 
            northEastBounds:bounds._northEast
        })
        // const boundsToReturn = [bounds._southWest, bounds._northEast] 
        this.props.setBounds(bounds)
    }


    createMap = () => {
        const myMap = L.map('myMap').setView([33.86956036384148, -84.48491725891019], 11);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 20,
            minZoom:1,
            preferCanvas: true,
            zoomSnap: 1,
            zoomDelta: 0.1,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: process.env.REACT_APP_MAPBOX_API_KEY
        }).addTo(myMap);

        // create event listener for when map moves 
        myMap.on("moveend", this.onMapChange)



        
        

        // set the state with the map's initial values 
        // this.props.parseBounds(myMap.getBounds())
        this.setState({
            map:myMap, 
            southWestBounds:myMap.getBounds()._southWest,
            northEastBounds:myMap.getBounds()._northEast
        })
        this.createFindLocationButton(myMap)
        this.props.setBounds(myMap.getBounds())
        return myMap 
    }

    // create find location button function 
    createFindLocationButton = (map) => {
        // create button for map 
        L.Control.Location = L.Control.extend({
            onAdd: function(){
                var locationButton = L.DomUtil.create('button')
                locationButton.innerText="gps_fixed"
                L.DomEvent.on(
                    locationButton,
                    'click', 
                    function(){map.locate({setView:true, enableHighAccuracy:true})})
                L.DomUtil.addClass(locationButton, "locationButton")
                L.DomUtil.addClass(locationButton, "material-icons")
                // locationButton.innerText='dfdsafasdf'
                return locationButton 
            }, 
            onRemove: function() {
                // Nothing to do here
            }
        }); 

        L.control.location = function(options){
            return new L.Control.Location(options); 
        }

        return L.control.location({position:'topleft'}).addTo(map)
    }

    render(){
        return (
            <div className="Map">
                <div id='myMap' className="animated fadeIn map"></div>
                {/* {this.addMarker()} */}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        attractions: state.map.attractions
    }
}
export default connect(mapStateToProps, {getAttraction})(Map) 
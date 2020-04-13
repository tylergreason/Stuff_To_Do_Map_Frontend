import React, { Component } from 'react' 
import L from 'leaflet';
import { editIcon } from '../../icons/Icons'
import { connect } from 'react-redux'
import { fillAttractionForm } from '../../store/actions/AttractionActions'
import { iconWithCustomText } from '../../icons/Icons'
import { toggleIconHoveredClass } from '../../generalFunctions'

import { toggleHoveredClass } from '../../generalFunctions'

import { createFindLocationButton } from '../mapFunctions'

const mapsList = []; 

class MyAttractionListMap extends Component {
    state = {
        map:""
    }

    componentDidMount = () => {
        // map must be set to this.map to access Leaflet functions 
        this.map = this.createMap()
        // add layer to this.map so we can control the attractions that are rendered 
        this.attractionLayer = L.layerGroup().addTo(this.map)
        // create another layer for the edit icon 
        this.editLayer = L.layerGroup().addTo(this.map)
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.attractions !== this.props.attractions){
            this.renderAttractionMarkers(this.state.map)
            this.editLayer.clearLayers();
        }
    }

    onMapClick = e => {
        //change what the map click does depending on the state of the MyAttractionList component 
        if (this.props.formToRender === 'new'){
            let lat = e.latlng.wrap().lat
            let lng = e.latlng.wrap().lng
            console.log(`${lat} and ${lng}`)
            fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
            .then(resp => resp.json())
            .then(data => {
                this.props.fillAttractionForm(data.address, data.lat, data.lon)
            }) 
            this.editLayer.clearLayers()
            // create marker where click was 
            this.marker = L.marker([lat,lng], {icon: editIcon})
            this.marker.addTo(this.editLayer)
        }
    }

    renderAttractionMarkers = () => {
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
        // this.props.getAttraction(e.target.id)
        toggleIconHoveredClass(e.target.id)
        toggleHoveredClass('AttractionListCard',e.target.id)
        const cardId = `AttractionListCard${e.target.id}`
        const cardToView = document.getElementById(cardId) 
        cardToView.scrollIntoView();
    }

    createMap = () => {
        const myMap = L.map('myMap').setView([33.74884399533138, -84.36997083332154], 11);
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
        // myMap.on("moveend", this.onMapChange)
        // set the state with the map's initial values 
        // this.props.parseBounds(myMap.getBounds())

        L.Map.addInitHook(function () {
            // Store a reference of the Leaflet map object on the map container,
            // so that it could be retrieved from DOM selection.
            // https://leafletjs.com/reference-1.3.4.html#map-getcontainer
            mapsList.push(this)
            this.getContainer()._leaflet_map = this;
          });

        this.setState({
            map:myMap, 
            southWestBounds:myMap.getBounds()._southWest,
            northEastBounds:myMap.getBounds()._northEast
        })
        createFindLocationButton(myMap)
        L.control.scale().addTo(myMap);
        myMap.on('click', this.onMapClick)
        // this.props.setBounds(myMap.getBounds())
        return myMap 
    }
    render(){
        return(
            <>
                <div id='myMap' className="animated fadeIn map"></div>
            </>
        )
    }
}
export default connect(null, { fillAttractionForm })(MyAttractionListMap)

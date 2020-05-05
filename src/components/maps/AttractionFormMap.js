import React, { Component } from 'react' 
import L from 'leaflet' 
import { connect } from 'react-redux'
import { fillAttractionForm } from '../../store/actions/AttractionActions'
import { editIcon } from '../../icons/Icons'

import { createFindLocationButton } from './mapFunctions'

class AttractionFormMap extends Component {
    state = {
        map:""
    }
    // create map on mounting 
    componentDidMount = () => {
        this.map = this.createMap()
        this.attractionLayer = L.layerGroup().addTo(this.map)
    }

    // create map 
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

        myMap.on('click', this.onMapClick)
        createFindLocationButton(myMap)
        return myMap
    }

    onMapClick = e => {
        let lat = e.latlng.wrap().lat
        let lng = e.latlng.wrap().lng
        console.log(`${lat} and ${lng}`)
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
        .then(resp => resp.json())
        .then(data => {
            this.props.fillAttractionForm(data.address, data.lat, data.lon)
        }) 
        // clear attractionLayer 
        this.attractionLayer.clearLayers()
        // create marker where click was 
        this.marker = L.marker([lat,lng], {icon: editIcon})
        this.marker.addTo(this.attractionLayer)
    }

    render(){
        return(
        <div className="Map">
            <div id='myMap' className="map newAttractionFormMap"></div>
        </div>
        )
    }
}   

export default connect(null, { fillAttractionForm})(AttractionFormMap)
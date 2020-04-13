import React, { Component } from 'react' 
import L from 'leaflet';
import { editIcon } from '../../icons/Icons'
import { connect } from 'react-redux'
import { fillAttractionForm } from '../../store/actions/AttractionActions'




import { createFindLocationButton } from '../mapFunctions'


class MyAttractionListMap extends Component {
    state = {
        map:""
    }

    componentDidMount = () => {
        // map must be set to this.map to access Leaflet functions 
        this.map = this.createMap()
        // add layer to this.map so we can control the attractions that are rendered 
        this.attractionLayer = L.layerGroup().addTo(this.map)
        // get user location and set view to it 
        // this.map.locate({setView:true, enableHighAccuracy:true})
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

import React, { Component } from 'react' 
import L from 'leaflet';
import { connect } from 'react-redux'


class Map extends Component {

    state = {
        map:"",
        mapBoxToken:'pk.eyJ1IjoidHlsZXJncmVhc29uIiwiYSI6ImNrOGVnbzc2ODE0dWczbG8xYXY5eWE4Y3IifQ.dvMx_fsMixzS0VfGmR-fsA',
        southWestBounds:'', 
        northEastBounds:''
    }

    componentDidMount = () => {
        // map must be set to this.map to access Leaflet functions 
        this.map = this.createMap()
        // add layer to this.map so we can control the attractions that are rendered 
        this.attractionLayer = L.layerGroup().addTo(this.map)
        // get user location and set view to it 
        this.map.locate({setView:true})
    }

    renderAttractionMarkers = (map) => {
        // clear the layer of attractions before rendering new attractions 
        this.attractionLayer.clearLayers()
        // iterate through attractions in props and make markers for each attraction 
        if (this.props.attractions){
            return this.props.attractions.map(attraction => {
                const lat = attraction.lat 
                const lng = attraction.lng 

                this.marker = L.marker([lat,lng],{title:attraction.name})
                // set click function 
                this.marker.on('click', this.handleMarkerClick)
                this.marker.id = attraction.id 
                this.marker.bindPopup(this.renderPopupText(attraction)).openPopup()
                this.marker.addTo(this.attractionLayer)
            })
        }
    }

    handleMarkerClick = e => {
        const cardId = `attractionMapListCard${e.target.id}`
        const cardToView = document.getElementById(cardId) 
        cardToView.scrollIntoView()
    }

    // create popup marker 
    renderPopupText = (attraction) => {
        return `<div className="popupName">${attraction.name}</div>
        ${attraction.description}`
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
            accessToken: this.state.mapBoxToken
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
        this.props.setBounds(myMap.getBounds())
        return myMap 
    }

    render(){
        return (
            <div className="Map">
                <h4>Map</h4>
                <div id='myMap'></div>
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
export default connect(mapStateToProps)(Map) 
import React, { Component } from 'react' 
import L from 'leaflet';

class Map extends Component {

    state = {
        map:"",
        mapBoxToken:'pk.eyJ1IjoidHlsZXJncmVhc29uIiwiYSI6ImNrOGVnbzc2ODE0dWczbG8xYXY5eWE4Y3IifQ.dvMx_fsMixzS0VfGmR-fsA'
    }

    componentDidMount = () => {
        this.createMap()
    }

    createMap = () => {
        const myMap = L.map('myMap').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 10,
            minZoom:1,
            preferCanvas: true,
            zoomSnap: 1,
            zoomDelta: 0.1,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: this.state.mapBoxToken
        }).addTo(myMap);
        const marker = L.marker([51.505, -0.09]).addTo(myMap)
        this.setState({
            map:myMap
        })
    }

    addMarker = () => {
        // marker.addTo(this.state.map)
    }

    render(){
        return (
            <div className="Map">
                <h4>Map</h4>
                <div id='myMap'></div>
                {this.addMarker()}
            </div>
        )
    }
}

export default Map 
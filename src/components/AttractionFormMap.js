import React, { Component } from 'react' 
import L from 'leaflet' 
import { connect } from 'react-redux'
import { fillAttractionForm } from '../store/actions/AttractionActions'

class AttractionFormMap extends Component {
    state = {
        map:"",
        mapBoxToken:'pk.eyJ1IjoidHlsZXJncmVhc29uIiwiYSI6ImNrOGVnbzc2ODE0dWczbG8xYXY5eWE4Y3IifQ.dvMx_fsMixzS0VfGmR-fsA',
    }
    // create map on mounting 
    componentDidMount = () => {
        this.createMap()
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
            accessToken: this.state.mapBoxToken
        }).addTo(myMap);

        myMap.on('click', this.onMapClick)
    }

    onMapClick = e => {
        let lat = e.latlng.lat
        let lng = e.latlng.lng
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
        .then(resp => resp.json())
        .then(data => {
            this.props.fillAttractionForm(data.address, data.lat, data.lon)
        }) 

    }

    render(){
        return(
        <>
            <h3>Adding a new attraction:</h3>
            <div>Click on the map where your attraction should appear. The address will populate the fields to the left. Then, you can further edit the attraction.</div>
            <div id='myMap'></div>
        </>
        )
    }
}

export default connect(null, { fillAttractionForm })(AttractionFormMap)
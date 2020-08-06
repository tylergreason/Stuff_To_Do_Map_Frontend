import React, { Component } from 'react' 
import L from 'leaflet';
import { connect } from 'react-redux'
import { iconWithCustomText, otmIcon } from '../../icons/Icons'
import { getAttraction } from '../../store/actions/AttractionActions'
import { toggleIconHoveredClass, toggleHoveredClass, scrollElementIntoView, scrollElementIntoViewById } from '../../generalFunctions'
import { highlightAttraction } from '../../store/actions/MapActions'
import { createFindLocationButton } from './mapFunctions'
import { toggleAttractionListShow } from '../../generalFunctions'

import { getAttractionListShown } from '../../store/actions/generalActions'



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
        this.otmLayer = L.layerGroup().addTo(this.map)
        // get user location and set view to it 
        // this.map.locate({setView:true, enableHighAccuracy:true})
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

    renderOTMMarkers = () => {
        this.otmLayer.clearLayers();
            if (this.props.otmAttractions){
                console.log(this.props.otmAttractions)
            return this.props.otmAttractions.map(attraction => {
                // console.log(attraction)
                // debugger
                // create variables to feed to marker creation function 
                const name = attraction.properties.name 
                const lng = attraction.geometry.coordinates[0]
                const lat = attraction.geometry.coordinates[1]
                const xid = attraction.properties.xid 
                // const wikidata = attraction.wikidata
                let marker = L.marker([lat,lng], {icon:otmIcon(`${name}`,`${xid}`)})
                marker.on('click',this.handleOTMMarkerClick)
                marker.id = xid; 
                return marker.addTo(this.otmLayer)
            })
        }
    }

    handleMarkerClick = e => {
        this.props.getAttraction(e.target.id)
        // unhide attractionList div 
        const attractionList = document.getElementById('attractionList'); 
        if (attractionList.hidden){
            attractionList.hidden = false; 
        }
        toggleIconHoveredClass(e.target.id)
        this.props.highlightAttraction(e.target.id)
        toggleAttractionListShow()
        // tell the store whether the list is shown or not
        this.props.getAttractionListShown()
    }

    handleOTMMarkerClick = e => {
        console.log(e.target.id)
        const otmAttractionList = document.getElementById('otmAttractionList'); 
        if (otmAttractionList.hidden){
            otmAttractionList.hidden = false; 
        }
        toggleIconHoveredClass(e.target.id)
        this.props.highlightAttraction(e.target.id)
        
        // scrollElementIntoView('otm',e.target.id)
        scrollElementIntoViewById(`otmAttractionCardLarge${e.target.id}`)
        toggleAttractionListShow()
        // tell the store whether the list is shown or not
        this.props.getAttractionListShown()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props){
            this.renderAttractionMarkers(this.state.map)
            this.renderOTMMarkers()
        }
        if (this.props.attractions.length >= 1){
            console.log('there are attractions!')
        }else {
            console.log('there are no attractions :(')
        }
    }
    
    onMapChange = (e) => {
        const bounds = e.target.getBounds() 
        this.setState({
            ...this.state, 
            southWestBounds:bounds._southWest, 
            northEastBounds:bounds._northEast
        })
        this.props.setBounds(bounds)
        this.renderOTMMarkers()
    }


    createMap = () => {
        const myMap = L.map('myMap').setView([33.74884399533138, -84.36997083332154], 14);
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
        createFindLocationButton(myMap)
        L.control.scale().addTo(myMap);
        this.props.setBounds(myMap.getBounds())
        return myMap 
    }

    render(){
        return (
            <div className="Map">
                <div id='myMap' className="map"></div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        attractions: state.map.attractions
    }
}
export default connect(mapStateToProps, {getAttraction,highlightAttraction, getAttractionListShown })(Map) 
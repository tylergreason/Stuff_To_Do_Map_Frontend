import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../store/actions/MapActions'

// two containers to render 
import AttractionList from './AttractionList'
import Map from '../components/Map'

class MapPage extends Component {  
    state = {
        bounds:''
    }

    // make function to return bounds and set them to this state, then fire getAttractions with those bounds as the argument 
    setBounds = (bounds) => {
        this.props.getAttractions(bounds)
        this.setState({
            bounds:bounds
        })
    }

    // function to parse what's brought back by getBounds() into useable format 
    parseBounds = (bounds) => {
        
        return [bounds._southWest, bounds._northEast]
    }

    componentDidMount = () => {
        this.props.getAttractions(this.state.bounds)
    }
    // get new attractions whenever the MapPage state updates 
    // componenetDidUpdate = (prevState)=>{
    //     debugger
    //     if (prevState.bounds !== this.state.bounds){
    //         console.log('props changed ')
    //         return this.props.getAttractions(this.state.bounds)
    //     }
    // }
    render(){
        return(
        <>
        <h1>Map Page</h1>
            <AttractionList attractions={this.props.attractions}/>
            <Map 
                attractions={this.props.attractions}
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
import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../actions/MapActions'

// two containers to render 
import AttractionList from './AttractionList'

class MapPage extends Component {   
    componentDidMount = () => {
        this.props.getAttractions()
    }
    render(){
        return(
        <>
        <h1>Map Page</h1>
            <AttractionList attractions={this.props.attractions}/>        
        
        
        </>
        )
    }
}


const mapStateToProps = state => {
    return {attractions: state.map.attractions}
}
export default connect(mapStateToProps, { getAttractions })(MapPage)
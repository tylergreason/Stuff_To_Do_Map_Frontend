import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttractions } from '../store/actions/MapActions'
import AttractionMapListCard from '../components/AttractionMapListCard'

class AttractionList extends Component {   
    renderAttractionCards = () => {
        if (this.props.attractions){
            return this.props.attractions.map(attraction => {
                return <AttractionMapListCard key={attraction.id} attraction={attraction}/> 
            })
        }
    }
    // componentDidUpdate = (prevProps) =>{
    //     if (prevProps.attractions !== this.props.attractions){
    //         this.renderAttractionCards() 
    //     }
    // }
    render(){
        return(<div className="AttractionList">
            <h3>
                attraction list
            </h3>
            {this.renderAttractionCards()}
        </div>)
    }
}


const mapStateToProps = state => {
    return {attractions: state.map.attractions}
}
export default connect(mapStateToProps, { getAttractions })(AttractionList)
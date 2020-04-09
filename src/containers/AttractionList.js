import React, { Component } from 'react' 
import { connect } from 'react-redux'
// import { getAttractions } from '../store/actions/MapActions'
import AttractionMapListCard from '../components/AttractionMapListCard'

class AttractionList extends Component {   
    state = {
        attractions:this.props.attractions
    }
    renderAttractionCards = () => {
        if (this.state.attractions !== undefined){
            return this.state.attractions.map(attraction => {
                return <AttractionMapListCard 
                            key={attraction.id} 
                            attraction={attraction}
                            onClick={this.attractionCardClick}
                            /> 
            })
        }
    }

    componentDidUpdate = (prevProps) =>{ 
        if (prevProps !== this.props){
                this.setState({
                    attractions:this.props.attractions
                })
        }
    }

    // on click, fetch attraction's info, then render a big card for that attraction 
    attractionCardClick = (e)=> {
        // e.preventDefault()
        console.log(e)
        // debugger
    }

    render(){
        return(
        <div className="AttractionList">
            {this.renderAttractionCards()}
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {attractions: state.map.attractions}
}
export default connect(mapStateToProps)(AttractionList)
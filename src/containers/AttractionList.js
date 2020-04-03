import React, { Component } from 'react' 
import { connect } from 'react-redux'
// import { getAttractions } from '../store/actions/MapActions'
import AttractionMapListCard from '../components/AttractionMapListCard'

class AttractionList extends Component {   
    state = {
        attractions:this.props.attractions
    }
    renderAttractionCards = () => {

        if (this.props.attractions !== undefined){
            return this.props.attractions.map(attraction => {
                return <AttractionMapListCard key={attraction.id} attraction={attraction}/> 
            })
        }
    }
    // componentDidMount = () =>{
    //     this.renderAttractionCards()
    // }
    componentDidUpdate = (prevProps) =>{ 
        if (prevProps !== this.props){
                this.setState({
                    attractions:this.props.attractions
                })
        }
    }
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
export default connect(mapStateToProps)(AttractionList)
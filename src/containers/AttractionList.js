import React, { Component } from 'react' 
import { connect } from 'react-redux'
import AttractionMapListCard from '../components/AttractionMapListCard'
import AttractionCardLarge from '../components/attractionCards/AttractionCardLarge'


class AttractionList extends Component {   
    state = {
        attractions:this.props.attractions, 
        attractionCardLargeToRender:''
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
        this.setState({
            attractionCardLargeToRender:e
        })
        // debugger
    }

    render(){
        return(
        <div className="AttractionList">
            {this.renderAttractionCards()}
            {this.state.attractionCardLargeToRender !== "" 
            ? 
            <AttractionCardLarge attraction={this.state.attractionCardLargeToRender} />
            :
            <></>
            }
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {attractions: state.map.attractions}
}
export default connect(mapStateToProps)(AttractionList)
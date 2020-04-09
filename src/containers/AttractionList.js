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

    // check if user clicked outside the large card box, and reset the large card state if so (if it's not already nothing)
    handleClick = e => {
        console.log(e.target.classList)
        if (e.target.classList.contains("AttractionCardLargeInner") !== true){
            if (this.state.attractionCardLargeToRender !== ""){
                this.setState({
                    attractionCardLargeToRender:""
                })
            }
        }
       // debugger
    }

    backToAttractionListClick = (e) => {
        e.preventDefault()
        this.setState({
            attractionCardLargeToRender:""
        })
    }
    render(){
        return(
        <div className="AttractionList" 
            // onClick={this.handleClick}
        >
            {this.renderAttractionCards()}
            {this.state.attractionCardLargeToRender !== "" 
            ? 
            <AttractionCardLarge attraction={this.state.attractionCardLargeToRender} 
                backClick={this.backToAttractionListClick}
            />
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
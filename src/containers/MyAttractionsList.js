import React, { Component } from 'react'
import MyAttractionListCard from '../components/MyAttractionListCard'
import EditAttractionForm from '../components/EditAttractionForm'
import NewAttractionForm from '../components/NewAttractionForm'


import { connect } from 'react-redux' 
import { getMyAttractions } from '../store/actions/MapActions'
import NewEditAttractionForm from '../components/NewAttractionForm'

class  MyAttractionList extends Component {

    state = {
        formToRender:'list'
    }

    componentDidMount = () => {
        this.props.getMyAttractions()
    }

    renderMyAttractions = () => {
        if (this.props.myAttractions !== undefined){
            return this.props.myAttractions.map(attraction => {
                return <MyAttractionListCard 
                            key={attraction.id} 
                            attraction={attraction} 
                            editClick={this.handleAttractionEditClick}
                            />
            })
        }
    }

    handleAttractionEditClick = (e) => {
        // filter through myAttractions and find the one whose ID matches the ID of the attraction clicked 
        const attractionToEdit = this.props.myAttractions.filter(attraction =>{ 
            return attraction.id === parseInt(e.target.name)
        })
        this.setState({
            formToRender:'edit',
            attractionToEdit: attractionToEdit[0]
        })
    }

    handleNewAttractionClick = (e) => {
        e.preventDefault() 
        this.setState({
            formToRender:'new'
        })
    }

    renderAttractionEditForm = () =>{
            return <EditAttractionForm 
                        attraction={this.state.attractionToEdit}
                        backToList={this.backToList}
                    />
    }

    renderNewAttractionForm = () => {
        return <NewEditAttractionForm/>
    }

    // create button to go back to list 
    backToList = () =>{
        // return <button onClick={this.setState({formToRender:'list'})}>Go Back</button>
        this.setState({
            formToRender:'list'
        })
    }

    // change if form or list is rendered depending on the state
    renderStateForm = () =>{
        if (this.state.formToRender === 'list'){
            return this.renderMyAttractions()
        } else if (this.state.formToRender === 'edit'){
            return this.renderAttractionEditForm()
        } else if (this.state.formToRender === 'new'){
            return this.renderNewAttractionForm()
        }
    }
    render(){
        return(
            <>
            <button onClick={this.handleNewAttractionClick}>New Attraction</button>
                {this.renderStateForm()}
                {/* <h2>My Attractions</h2>
                {this.state.modifyingAttraction 
                ?
                this.renderAttractionEditForm()
                :
                this.renderMyAttractions(this.props.myAttractions)
                } */}
            </>
    )
    }
}

const mapStateToProps = state => {
    return {myAttractions: state.myAttractions}
}

export default connect(mapStateToProps, { getMyAttractions })(MyAttractionList)
import React, { Component } from 'react'
import MyAttractionListCard from '../components/MyAttractionListCard'
import EditAttractionForm from '../components/EditAttractionForm'
import NewAttractionForm from '../components/NewAttractionForm'
import AttractionFormMap from '../components/AttractionFormMap'


import { connect } from 'react-redux' 
import { getMyAttractions } from '../store/actions/MapActions'

class  MyAttractionList extends Component {

    state = {
        formToRender:'list'
    }

    componentDidMount = () => {
        this.props.getMyAttractions()
    }

    renderMyAttractions = () => {
        if (this.props.getMyAttractions !== undefined){
            // debugger
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
        const attractionToEdit = this.props.getMyAttractions.filter(attraction =>{ 
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
        return (<>
                <NewAttractionForm 
                        backToList={this.backToList}
                />
                <AttractionFormMap

                />
                </>)
    }

    // create button to go back to list 
    backToList = () =>{
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
            {/* only render new attraction button if at the list page  */}
            {this.state.formToRender === 'list' ? <button onClick={this.handleNewAttractionClick}>New Attraction</button> : <></> }
            {/* render backToList button if not on list */}
            {this.state.formToRender !== 'list' ? <button onClick={this.backToList}>Go Back</button> : <></>}
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
import React from 'react' 
import EditPassword from './myAccount/EditPassword'
import EditEmail from './myAccount/EditEmail'
import EditInfo from './myAccount/EditInfo'
import DeleteAccount from './myAccount/DeleteAccount'



import { connect } from 'react-redux'
const MyAccount = (props) => { 
        console.log('myAccount mounted')
        return( 
            <div className="MyAccount middlePageBox">
                <EditInfo />
                <EditPassword userId={props.user.id}/>
                <EditEmail userId={props.user.id}/>
                <DeleteAccount userId={props.user.id}/>
            </div>
        )
}
const mapStateToProps = state => {
    return {user: state.user.user}
}
export default connect(mapStateToProps)(MyAccount)
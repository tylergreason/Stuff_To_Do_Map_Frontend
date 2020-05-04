import React from 'react' 
import EditPassword from './EditPassword'
import EditEmail from './EditEmail'
import EditInfo from './EditInfo'
import DeleteAccount from './DeleteAccount'



import { connect } from 'react-redux'
const MyAccount = (props) => { 
        return( 
            <div className="MyAccount">
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
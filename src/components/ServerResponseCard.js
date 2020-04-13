import React from 'react' 

export const ServerResponseCard = props => {
    // server returned error
    if (props.response.error){
        // if there is only one error (Rails returned a string)
        if (typeof(props.response.error) === 'string') {
            return (
                <ul className="serverResponseList error">
                    <li className="serverResponseItem">{props.response.error}</li> 
                </ul>
                )
                // else if error is not blank and is an array 
        }else if (props.response.error.length > 0 && typeof(props.response.error) === 'object'){
            return (
            <ul className="serverResponseList error">
                    {props.response.error.map(response => {
                        return <li className="serverResponseItem">{response}</li> 
                    })}
            </ul>
            )
        }
    }else if (props.response.success){
        // server did not return error
        return(
            <div className="serverResponse success">
                {props.response.success}
            </div>)
    }else{
        return(<></>)
    }
}
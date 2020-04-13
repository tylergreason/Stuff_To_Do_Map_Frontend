import React from 'react' 

export const ServerResponseCard = props => {
    // server returned error
    if (props.response.error){
        // if the error isn't blank 
        if (props.response.error.length > 0){
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
import React from 'react'
import styled, {keyframes} from 'styled-components'

const ServerWarning = (props) => {
    const fadeIn = keyframes`
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    `;
    // create warning div using styled component 
    const WarningDiv = styled.div`
        position: fixed;
        top: 50%; 
        left: 50%;
        background-color: #75cff0;    
        transform: translate(-50%, -50%); 
        max-width: 700px;
        padding: 10px; 
        border: 3px solid #172b97;
        border-radius: 10px; 
        font-size: 1.5rem;
        animation: ${fadeIn} 1s; 
    `
    
    return(
        <div>
            <WarningDiv class={props.class}>
                ✌️ Hey there! It looks like no attractions are available to view right now. You may need to wait around 10 seconds for the database to wake up (this app uses free Heroku servers that sleep when they haven't been used for long enough) or zoom into the map farther to see the attractions!
            </WarningDiv>
        </div>
    )
}

export default ServerWarning
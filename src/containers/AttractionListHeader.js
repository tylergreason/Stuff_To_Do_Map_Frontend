import React from 'react' 

const AttractionListHeader = props => {
    let headerText, listCount, onClick, id, list; 
    if (props.type === 'user'){
        headerText = "User Attractions"; 
        id = 'user'; 
        list = 'attractionList';
        listCount = props.listCount; 
        onClick = () =>{
            const attractionList = document.getElementById('attractionList'); 
            attractionList.hidden = !attractionList.hidden; 
        };
    }else{
        headerText = "Historical Districts"
        id = 'otm'; 
        list = 'otmAttractionList'
        listCount = props.listCount; 
        onClick = () =>{
            const otmAttractionList = document.getElementById('otmAttractionList'); 
            otmAttractionList.hidden = !otmAttractionList.hidden; 
        }
    }


    return (
        <div 
            className = {'listHeader'}
            onClick={onClick}
            id={`${id}AttractionsHeader`}
            list={list}
        >
            {headerText} ({listCount})
        </div>
    )
}

export default AttractionListHeader;
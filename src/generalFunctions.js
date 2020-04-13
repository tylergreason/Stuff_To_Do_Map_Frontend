export const toggleIconHoveredClass = id => {
        // find all attraction markers and remove their 'hovered' class if they have it 
        const markers = Array.from(document.getElementsByClassName('icon'))
        // console.log(markers);
        markers.forEach(marker => marker.classList.remove('hovered'))

        // find the marker to add the 'hovered' class to 
        const markerToHover = document.getElementById(`attractionIcon${id}`)
        // give that marker the 'hovered' class if it could be found 
        if (markerToHover){
                markerToHover.classList.add('hovered') 
        }
}

export const toggleHoveredClass = (className,id) => {
        // find all elements with this class name
        const elements = Array.from(document.getElementsByClassName(className));
        // remove the 'hovered' class from each of those elements 
        elements.forEach(element => element.classList.remove('hovered')); 
        // find the element to add 'hovered' to 
        const elementToHover = document.getElementById(`${className}${id}`)
        // add the 'hovered' class to that element 
        elementToHover.classList.add('hovered'); 
}

export const scrollMarkerIntoView = (lat,lng) => {
        
}
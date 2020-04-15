export const toggleIconHoveredClass = id => {
        // find all attraction markers and remove their 'hovered' class if they have it 
        const markers = Array.from(document.getElementsByClassName('icon'))
        // console.log(markers);
        markers.forEach(marker => marker.classList.remove('hovered'))

        // find the marker to add the 'hovered' class to 
        const markerToHover = document.querySelector(`[id$='con${id}']`);

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

export const scrollElementIntoView = (idStart, idEnd) => {
        const element = document.querySelector(`[id^='${idStart}'][id$='${idEnd}']`)
        // debugger
        if (element) {
                console.log(element)
                element.scrollIntoView()
        }
}

export const scrollElementIntoViewById = id =>{
        const element = document.getElementById(id) 
        // debugger 
        if (element){
                element.scrollIntoView()
        }
}
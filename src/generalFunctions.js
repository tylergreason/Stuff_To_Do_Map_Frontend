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

// find attraction list and return it if it exists 
const findAttractionList = () =>{
    // find the first (and only) element with the class AttractionList
    // find its first value
    const list = document.getElementsByClassName("AttractionList")[0]

    // if there is a list, return it
    if (list !== undefined){
            return list
    }
}

export const toggleAttractionListShow = () => {
    // // find the first (and only) element with the class AttractionList
    // // find its first value
    // const list = document.getElementsByClassName("AttractionList")[0]

    // // if there is a list, check if it contains the class 'showList' and add that class if it doesn't 
    const list = findAttractionList() 
    console.log(list)
    if (list !== undefined){
            list.classList.toggle("showList")
    }else{
        console.log("That list doesn't exist!")
    }
}

// boolean for if attraction list has showList class 
export const attractionListStatus = () => {
    const list = findAttractionList() 
    if (list !== undefined){
        // debugger
        return list.classList.contains("showList")
    }
}
export const toggleHoveredClass = id => {
        // find all attraction markers and remove their 'hovered' class if they have it 
        const markers = Array.from(document.getElementsByClassName('icon'))
        console.log(markers);
        markers.forEach(marker => marker.classList.remove('hovered'))

        // find the marker to add the 'hovered' class to 
        const markerToHover = document.getElementById(`attractionIcon${id}`)
        console.log(markerToHover);
        console.log(id)
        // give that marker the 'hovered' class 
        // debugger
        markerToHover.classList.add('hovered')
}
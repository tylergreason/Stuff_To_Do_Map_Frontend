import L from 'leaflet';


export const createFindLocationButton = (map) => {
    // create button for map 
    L.Control.Location = L.Control.extend({
        onAdd: function(){
            const locationButton = L.DomUtil.create('button')
            locationButton.innerText="gps_fixed"
            L.DomEvent.on(
                locationButton,
                'click', 
                function(e){
                    // e.stopPropigation()
                    L.DomEvent.stopPropagation(e);
                    map.locate({setView:true})
                })
            L.DomUtil.addClass(locationButton, "locationButton")
            L.DomUtil.addClass(locationButton, "material-icons")
            // locationButton.innerText='dfdsafasdf'
            return locationButton 
        }, 
        onRemove: function() {
            // Nothing to do here
        }
    }); 

    const locationButtonToAdd =(options) => {
        return new L.Control.Location(options); 
    }

    return locationButtonToAdd({position:'topleft'}).addTo(map)
}
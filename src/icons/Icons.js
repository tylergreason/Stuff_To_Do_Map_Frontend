import L from 'leaflet' 
import './iconStyle.css'


export const userIcon = L.divIcon({
    className: 'materialMapIcon',
    html: "<span class='material-icons userIcon'>place</span>",
    iconAnchor: [12,30]
})
const editIconMarker = `<span class='material-icons editIcon'>
                            edit_location
                        </span>
                        <span class='markerShadow material-icons'>
                            <!-- trip_origin -->
                        </span>
                        `


export const editIcon  = L.divIcon({
    className: 'materialMapIcon', 
    html:editIconMarker,
    iconAnchor:[12,30]
    })
    
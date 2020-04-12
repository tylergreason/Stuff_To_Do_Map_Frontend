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

export const iconWithCustomText = text => {
    const userIconMarker = `
                                <div class='userIconWrapper'>
                                    <div class='iconText'>${text}</div>
                                    <span class='material-icons userIcon'>
                                    place
                                    </span>
                                    </div>
                                    `
    return L.divIcon({
        className: 'materialMapIcon',
        html: userIconMarker,
        iconAnchor: [12,30]
    })
}

export const editIcon  = L.divIcon({
    className: 'materialMapIcon', 
    html:editIconMarker,
    iconAnchor:[12,30]
    })
    
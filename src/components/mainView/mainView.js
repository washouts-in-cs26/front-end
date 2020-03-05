import React from 'react'
import CurrentRoomDescription from '../currentRoomDescription/currentRoomDescription'
import MapComponent from '../map/map'
import Controls from '../controls/Controls'

const MainView = () => {
    return (
        <div>
            <div>
                <CurrentRoomDescription />
            </div>
            <div>
                <MapComponent />
            </div>
            <div>
                <Controls />
            </div>
        </div>
    )
}

export default MainView
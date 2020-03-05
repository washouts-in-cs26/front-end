import React from 'react'
import CurrentRoomDescription from '../currentRoomDescription/currentRoomDescription'
import MapComponent from '../map/map'
import Controls from '../controls/Controls'
import './mainView.css'

const MainView = () => {
    return (
        <div className='game-view'>
            <div className='map'>
                <MapComponent />
            </div>
            <div className='details'>
                <div className='desc'>
                    <CurrentRoomDescription />
                </div>
                <div className='controls'>
                    <Controls />
                </div>
            </div>
        </div >
    )
}

export default MainView
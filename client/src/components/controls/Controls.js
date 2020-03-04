import React from 'react'
import up from '../../images/arrowUp.png'
import down from '../../images/arrowDown.png'
import left from '../../images/arrowLeft.png'
import right from '../../images/arrowRight.png'

import { axiosWithAuth } from '../../utils/axiosWithAuth'
import './Controls.css'

import {movePlayer} from '../../store/actions'

import {connect} from 'react-redux'



function Controls({movePlayer}) {

    // const changeDirection = (input) => {
    //     movePlayer(input)
    // }

    return (
        <div className='d-pad'>
            <img id='up' src={up} onClick = {() => movePlayer('n')} alt='up'/>
            <img id='down' src={down} onClick = {() => movePlayer('s')} alt='down'/>
            <img id='left' src={left} onClick = {() => movePlayer('w')} alt='left'/>
            <img id='right' src={right} onClick = {() => movePlayer('e')} alt='right'/>
        </div>
    )
}

export default connect({movePlayer})(Controls)
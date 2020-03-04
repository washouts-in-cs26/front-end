import React from 'react'
import up from '../../images/arrowUp.png'
import down from '../../images/arrowDown.png'
import left from '../../images/arrowLeft.png'
import right from '../../images/arrowRight.png'
import {movePlayer} from '../../store/actions'

import {connect} from 'react-redux'


function Controls({movePlayer}) {

    // const changeDirection = (input) => {
    //     movePlayer(input)
    // }

    return (
        <div>
            <img src={up} onClick = {() => movePlayer('n')} alt='up'/>
            <img src={down} onClick = {() => movePlayer('s')} alt='up'/>
            <img src={left} onClick = {() => movePlayer('w')} alt='up'/>
            <img src={right} onClick = {() => movePlayer('e')} alt='up'/>
        </div>
    )
}

export default connect({movePlayer})(Controls)
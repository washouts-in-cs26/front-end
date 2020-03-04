import React, {useState, useEffect} from 'react'
import up from '../../images/arrowUp.png'
import down from '../../images/arrowDown.png'
import left from '../../images/arrowLeft.png'
import right from '../../images/arrowRight.png'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import './Controls.css'

function Controls() {
    const [player, setPlayer] = useState([])

    const movePlayer = (input) => {
        axiosWithAuth()
        .post('url', {direction: input})
        .then(res => {
            setPlayer(res.data)
            console.log(res)
        })
    }

    return (
        <div className='d-pad'>
            <img id='up' src={up} onClick = {() => movePlayer('n')} alt='up'/>
            <img id='down' src={down} onClick = {() => movePlayer('s')} alt='down'/>
            <img id='left' src={left} onClick = {() => movePlayer('w')} alt='left'/>
            <img id='right' src={right} onClick = {() => movePlayer('e')} alt='right'/>
        </div>
    )
}

export default Controls
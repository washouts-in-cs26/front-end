import React, {useState, useEffect} from 'react'
import up from '../../images/arrowUp.png'
import down from '../../images/arrowDown.png'
import left from '../../images/arrowLeft.png'
import right from '../../images/arrowRight.png'
import { axiosWithAuth } from '../../utils/axiosWithAuth'


function Controls() {
    const [player, setPlayer] = useState({})

    const movePlayer = (input) => {
        axiosWithAuth()
        .post('url', {direction: input})
        .then(res => {
            setPlayer(res.data)
            console.log(res)
        })
    }

    return (
        <div>
            <img src={up} onClick = {() => movePlayer('n')} alt='up'/>
            <img src={down} onClick = {() => movePlayer('s')} alt='up'/>
            <img src={left} onClick = {() => movePlayer('w')} alt='up'/>
            <img src={right} onClick = {() => movePlayer('e')} alt='up'/>
        </div>
    )
}

export default Controls
import React from 'react'
import up from '../../images/arrowUp.png'
import down from '../../images/arrowDown.png'
import left from '../../images/arrowLeft.png'
import right from '../../images/arrowRight.png'
import {movePlayer, getData, getInit} from '../../store/actions'

import {connect} from 'react-redux'

function Controls(props) {

    const {mapData, playerData, initInfo, isFetching, error, getData, getInit, movePlayer} = props

    const changeDirection = (input) => {
        movePlayer(input)
        getData()
        getInit()
    }

    return (
        <div>
            <img src={up} onClick = {() => changeDirection('n')} alt='up'/>
            <img src={down} onClick = {() => changeDirection('s')} alt='up'/>
            <img src={left} onClick = {() => changeDirection('w')} alt='up'/>
            <img src={right} onClick = {() => changeDirection('e')} alt='up'/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       mapData: state.mapData,
       playerData: state.playerData,
       initInfo: state.initInfo,
       isFetching: state.isFetching,
       error: state.error
    }
}

export default connect(mapStateToProps, {movePlayer, getData, getInit})(Controls)
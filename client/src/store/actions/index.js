import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_TRAILS_FAILURE"

export const getData = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_DATA_START });
		axios
			.get('URL HERE') // add /map endpoint
			.then((res) => {
                const roomData = res.data
                dispatch({ type: FETCH_DATA_SUCCESS, payload: roomData})
            })
            .catch(err => {
                dispatch({ type: FETCH_DATA_FAILURE, payload: `${err}` })
                console.log('fetching data failure', err)
            })
	};
};

export const MOVE_PLAYER_SUCCESS = 'MOVE_PLAYER_SUCCESS'
export const MOVE_PLAYER_FAILURE = 'MOVE_PLAYER_FAILURE'

export const movePlayer = input => dispatch => {
    axiosWithAuth().post("URL", input) // add adv/move/ endpoint
    .then(res => {
        const moveData = res.data
        dispatch({ type: MOVE_PLAYER_SUCCESS, payload: moveData })
    })
    .catch(err => {
        dispatch({ type: MOVE_PLAYER_FAILURE, payload: `{err}` })
        console.log('move error: ', err)
    })
}

export const FETCH_INIT_START = "FETCH_INIT_START"
export const FETCH_INIT_SUCCESS = "FETCH_INIT_SUCCESS"
export const FETCH_INIT_FAILURE = "FETCH_INIT_FAILURE"

export const getInit = () => dispatch => {
    dispatch({type: FETCH_INIT_START})
    axiosWithAuth().get("URL HERE") // add /init endpoint
        .then(response => {
            dispatch({type: FETCH_INIT_SUCCESS, payload: response.data})
            console.log("getInit response", response)
        })
        .catch(err => {
            dispatch({type: FETCH_INIT_FAILURE, payload: `${err}`})
            console.log("errrrrrror from getInit", err)
        })
}
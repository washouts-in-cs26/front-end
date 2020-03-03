import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    MOVE_PLAYER_SUCCESS,
    MOVE_PLAYER_FAILURE,
    FETCH_INIT_START,
    FETCH_INIT_SUCCESS,
    FETCH_INIT_FAILURE
} from '../actions'

const initialState = {
    mapData: [], // the array of objects that holds all rooms
    playerData: [], // the response that will be returned when we move player (POST REQUEST)
    initInfo: [], //this will hold our player's data like current room
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
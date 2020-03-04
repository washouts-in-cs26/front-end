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
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                mapData: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case MOVE_PLAYER_SUCCESS:
            return {
                ...state,
                playerData: action.payload,
                isFetching: false,
                error: ''
            }
        case MOVE_PLAYER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_INIT_START:
            return {
                ...state,
                isFetching: true,
                error: action.payload
            }
        case FETCH_INIT_SUCCESS:
            return {
                ...state,
                initInfo: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_INIT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};
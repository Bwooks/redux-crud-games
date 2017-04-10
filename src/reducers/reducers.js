
import {SET_GAMES} from '../actions/index.js';
export const games = (state = [], action = {}) => {
    switch(action.type) {
        case SET_GAMES:
            return action.games;
        default:
            return state;
    }
};

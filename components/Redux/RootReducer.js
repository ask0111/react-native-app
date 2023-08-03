
import { combineReducers } from 'redux';
import {userReducer, addedCartsReducer} from './Reducer';

const rootReducer = combineReducers({
    userReducer,
    addedCartsReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import item1Reducer from './reducers/item1.reducer';
import item2Reducer from './reducers/item2.reducer';

export default combineReducers({
    left: item1Reducer,
    right: item2Reducer
});
import { combineReducers } from 'redux';
import places from './placeReducer';
import map from './mapReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  places,
  map,
  error,
});

export default rootReducer;

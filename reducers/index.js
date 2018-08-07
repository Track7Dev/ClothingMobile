import { combineReducers } from 'redux';
import MainReducer from './_main';


const rootReducer = combineReducers({
  main: MainReducer
});

export default rootReducer;
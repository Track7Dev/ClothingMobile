import {LOGIN, LOGOUT, UPDATE} from './actions';

export default MainReducer = (store= {authStatus:'UNAUTHORIZED'}, action) => {
  let update = Object.assign({}, store);
  switch (action.type) {

    case LOGIN:
    update.authStatus = "AUTHORIZED";
    return update;
    

    case LOGOUT:
    update.authStatus = "UNAUTHORIZED";
    return update;

    case UPDATE:
    update.authStatus = action.payload;
    return update;
    
    default:
    return store;
  }
}
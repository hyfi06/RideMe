import { combineReducers } from 'redux';
import destinyReducer from './destinyReducer';
import originReducer from './originReducer';

export default combineReducers({
  originReducer,
  destinyReducer
});

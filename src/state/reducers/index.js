import {combineReducers} from 'redux';
import reducerLoginPost from './loginPost';

const allReducers = combineReducers({
  loginPost: reducerLoginPost
});

export default allReducers;
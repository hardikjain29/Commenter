import { combineReducers } from 'redux';

import comments from './reducers/comments';
import recipes from './reducers/recipes';
import isLoading from './reducers/isLoading'

const rootReducer = combineReducers({isLoading, comments, recipes});

export default rootReducer;

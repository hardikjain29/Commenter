import { combineReducers } from 'redux';

import comments from './reducers/comments';

const rootReducer = combineReducers({comments});

export default rootReducer;

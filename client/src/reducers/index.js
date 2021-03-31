import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './auth';

const rootReducer = combineReducers({
	user: userReducer
});

const middleware = [];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

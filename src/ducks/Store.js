import { configureStore } from '@reduxjs/toolkit';
import todos from './Todos';
import thunk from 'redux-thunk';
import apartmentlist from './ApartmentList';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos,
  apartmentlist,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, undefined, middleware);

export default store;

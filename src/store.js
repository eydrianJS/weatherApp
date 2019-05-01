import { createStore, applyMiddleware } from 'redux';
import weatherReducer from './reducers/weatherReducer';
import thunk from 'redux-thunk';

const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;
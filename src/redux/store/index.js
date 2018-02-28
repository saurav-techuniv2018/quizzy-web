import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers';

const initStore = () => createStore(combineReducers(reducers));

export default initStore;

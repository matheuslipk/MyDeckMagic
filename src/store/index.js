import { createStore, combineReducers } from 'redux';
import deck from './reducer/deckReducer';

const reducers = combineReducers({
  deck,
});

const enhancer = process.env.NODE_ENV === 'development'
  ? console.tron.createEnhancer() : null;

// const store = createStore(reducers);
const store = createStore(reducers, enhancer);

export default store;

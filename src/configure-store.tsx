import { createStore } from 'redux';
import { counterReducer } from './components/counter/counterReducer';

export const store = createStore(counterReducer);
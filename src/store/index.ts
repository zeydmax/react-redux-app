import { createStore } from 'redux';
import rootReducer from './articles/reducer';

const store = createStore(rootReducer);

export default store;
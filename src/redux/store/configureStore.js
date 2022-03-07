import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers/root';


const store = createStore(
    combineReducers({
        root: rootReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
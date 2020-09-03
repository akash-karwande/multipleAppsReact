import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import {imageReducer} from '../reducers/image';


const middleware = [thunk];
// create store  

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            images: imageReducer,
        }),applyMiddleware(...middleware));

    return store;
};



import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import { imageReducer } from '../reducers/image';
import { musicReducer } from '../reducers/music'
import { weatherReducer } from '../reducers/weather'

const middleware = [thunk];

const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    images: imageReducer,
    music: musicReducer,
    weather: weatherReducer
});
// create store  

export default () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware)));

    return store;
};



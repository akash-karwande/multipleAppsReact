import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { getVisibleExpenses } from './selectors/expenses'


const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', createdAt: 0, amount: 123 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1, amount: 90 }));
store.dispatch(addExpense({ description: 'rent', createdAt: 12, amount: 70 }));

const state = store.getState();
getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();

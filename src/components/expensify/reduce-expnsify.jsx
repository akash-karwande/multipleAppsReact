import { createStore, combineReducers } from 'redux'
import React from 'react';
import { v4 as uuidv4 } from 'uuid';


// Add Expense
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

//remove expense

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// edit expense

const editExpense = (id, update) => ({

    type: 'EDIT_EXPENSE',
    id,
    update

});

// filter

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {

        case 'ADD_EXPENSE':
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.update }
                } else {
                    return expense
                }
            })

        default:
            return state
    }

}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text }

        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }

        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }

        case 'SET_START_DATE':
            return { ...state, startDate: action.date }

        case 'SET_END_DATE':
            return { ...state, endDate: action.date }

        default:
            return state
    }

}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());


        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if ( sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1: -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1
        }
    });
}

// create store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }));


store.subscribe(() => {
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 2222,createdAt:123 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffe', amount: 8888, createdAt: 200 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 100 }));

//store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(20));
// store.dispatch(setStartDate());
// store.dispatch(setStartDate(200));
// store.dispatch(setEndDate(300));

const demoState = {
    expenses: [{
        id: 'lkkggkkgbg',
        description: 'Feb rent',
        note: 'In advance',
        amount: 23400,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};



function ReduceExpnsify() {
    return (
        <div>

        </div>
    )
}


export default ReduceExpnsify

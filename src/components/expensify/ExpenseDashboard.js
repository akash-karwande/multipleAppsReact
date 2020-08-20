import React, { Component } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { Link } from 'react-router-dom';

export class ExpenseDashboard extends Component {
    render() {
        return (
            <div className='expense-app'>
                <ExpenseListFilters />
                <h3 className='add-expense'> <Link to='/add-expense'> Add Expense</Link></h3>
                <ExpenseList />
            </div>
        )
    }
}

export default ExpenseDashboard

import React from 'react'
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux'
import { addExpense } from '../../actions/expenses';

function AddExpense(props) {
    return (
        <div className='add-expense'>
            <h2>Add Expense</h2>
            <ExpenseForm onSubmit={(expense) =>{
               props.dispatch(addExpense(expense));
               props.history.push('/expense');
            }} />
        </div>
    )
}

export default connect()(AddExpense)

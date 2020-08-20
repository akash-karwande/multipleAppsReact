import React from 'react';
import { Link } from 'react-router-dom';

function ExpenseListItem({dispatch, id, description, amount, createdAt }) {
    return (
        <div>
           <Link to={`/edit/${id}`}><h3 className='expense-description'>{description}</h3></Link>
            <p>Amount is {amount} and its created at {createdAt}</p>
            <hr className='hr-tag' />
        </div>
    )
}

export default ExpenseListItem

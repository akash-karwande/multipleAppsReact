import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

function ExpenseListFilters(props) {
    return (
        <div className='expense-filter'>
            <input type="text" value={props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }} placeholder='Filter it by'/>

            <select value={props.filters.sortBy} onChange={(e) =>{
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate());
                } else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount());
                }
            }}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)

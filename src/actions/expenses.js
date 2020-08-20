import { v4 as uuidv4 } from 'uuid';


// Add Expense
export const addExpense = (
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

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// edit expense

export const editExpense = (id, update) => ({

    type: 'EDIT_EXPENSE',
    id,
    update

});
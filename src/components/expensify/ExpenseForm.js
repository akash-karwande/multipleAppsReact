 import React, { Component } from 'react';
 
class ExpenseForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             description: props.expense ? props.expense.description : '',
             amount: props.expense ? props.expense.amount :'',
             note: props.expense ? props.expense.note : '',
             error: '',
             createdAt: props.expense ? props.expense.createdAt : new Date().getTime()
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
          }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onSubmit = (e) => {
       e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please enter all the details'}));
        } else {
            this.setState(() => ({error: ''}));

            this.props.onSubmit({
                description: this.state.description,
                amount: this.state.amount,
                createdAt: this.state.createdAt,
                note: this.state.note
            });

        }


    }
    
     render() {
         return (
             <div className='expense-form'>
                {this.state.error && <p>{this.state.error}</p>}
                <form>
                    <input type='text' placeholder='Description' value={this.state.description} onChange={this.onDescriptionChange} /><br />
                    <input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange}/><br />
                    <textarea value={this.state.note} onChange={this.onNoteChange} placeholder='Add a note for your expense'></textarea><br />
                    <input readOnly type='text' value={this.state.createdAt} /><br />
                    <button onClick={this.onSubmit}>Add expense</button>
                </form>
             </div>
         )
     }
 }
 
 export default ExpenseForm;
 
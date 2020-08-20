import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <span><Link to='/'>Home</Link></span>
                    <span><Link to='/music'>Music</Link></span>
                    <span><Link to='/expense'>Expense</Link></span>
                    <span><Link to='/weather'>Weather</Link></span>
                </footer>
            </div>
        )
    }
}

export default Footer

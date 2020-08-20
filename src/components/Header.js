import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <span><Link to='/'>Home</Link></span>
                    <span><Link to='/music'>Music</Link></span>
                    <span><Link to='/expense'>Expense</Link></span>
                    <span><Link to='/weather'>Weather</Link></span>
                </header>
            </div>
        )
    }
}

export default Header

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='header-logo'>
                        <NavLink activeClassName='navactive' to='/'>react-Redux</NavLink>
                    </div>
                    <span><NavLink activeClassName='navactive' to='/images'>Images</NavLink></span>
                    <span><NavLink activeClassName='navactive' to='/music'>Music</NavLink></span>
                    <span><NavLink activeClassName='navactive' to='/expense'>Expense</NavLink></span>
                    <span><NavLink activeClassName='navactive' to='/weather'>Weather</NavLink></span>
                </header>
            </div>
        )
    }
}

export default Header

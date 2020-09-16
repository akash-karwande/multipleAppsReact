import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div className='fork'>
                    <a rel="noopener noreferrer" href='https://github.com/akash-karwande?tab=repositories' target='_blank'>Fork me on Github</a>
                </div>
                <header>
                    <div className='header-logo'>
                        <NavLink activeClassName='navactive' to='/'>react-Redux</NavLink>
                    </div>
                    <div className='header-menu'>
                        <span><NavLink activeClassName='navactive' to='/images'>Images</NavLink></span>
                        <span><NavLink activeClassName='navactive' to='/music'>Music</NavLink></span>
                        <span><NavLink activeClassName='navactive' to='/expense'>Expense</NavLink></span>
                        <span><NavLink activeClassName='navactive' to='/weather'>Weather</NavLink></span>
                        <span><NavLink activeClassName='navactive' to='/games'>Games</NavLink></span>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header

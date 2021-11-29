import React from 'react';
import { NavLink } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu'
import { TiThLarge, TiTimes, TiHomeOutline, TiImage, TiWeatherCloudy, TiPuzzle } from "react-icons/ti";


const Header = () => {

    return (
        <div>
            <div className='fork'>
                <a rel="noopener noreferrer" href='https://github.com/akash-karwande?tab=repositories' target='_blank'>Fork me on Github</a>
            </div>
            <header>
                <Menu isOpen={false}  customBurgerIcon={<TiThLarge />}
                    customCrossIcon={< TiTimes />}>
                    <div className='header-menu'>
                        <NavLink exact activeClassName='navactive' to='/'><span><TiHomeOutline /></span>About Me</NavLink>
                        <NavLink activeClassName='navactive' to='/images'><span><TiImage /></span>Images</NavLink>
                        {/* <NavLink activeClassName='navactive' to='/music'><span><TiNotes /></span>Music</NavLink> */}
                        {/* <NavLink activeClassName='navactive' to='/expense'><span><TiEye /></span>Expense</NavLink> */}
                        <NavLink activeClassName='navactive' to='/weather'><span><TiWeatherCloudy /></span>Weather</NavLink>
                        {/* <NavLink activeClassName='navactive' to='/youtube-clone'><span><TiVideo /></span>YouTube</NavLink> */}
                        <NavLink activeClassName='navactive' to='/tictactoc'><span><TiPuzzle /></span>Tic Tac Toc</NavLink>
                        <NavLink activeClassName='navactive' to='/math-2048'><span><TiPuzzle /></span>2048</NavLink>
                    </div>
                </Menu>
            </header>
        </div>
    )
}

export default Header

import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h2>this is header part</h2>
            <nav className='gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;
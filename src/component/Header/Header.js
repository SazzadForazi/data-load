import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <nav className='navLink'>
            <NavLink className='nav' activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink className='nav' activeStyle={activeStyle} to="/friends">Friends</NavLink>
            <NavLink className='nav' activeStyle={activeStyle} to="/about">About</NavLink>
            <NavLink className='nav' activeStyle={activeStyle} to="about/culture">Culture</NavLink>
        </nav>
    );
};

export default Header;
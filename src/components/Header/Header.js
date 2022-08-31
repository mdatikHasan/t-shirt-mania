import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Welcome to TShirt Mania!!!</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/orderreview'>Order Review</NavLink>
                <NavLink to='/grandpa'>Grandpa</NavLink>
            </nav>
        </div>
    );
};

export default Header;
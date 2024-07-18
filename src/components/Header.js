import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">Recipe Sharing Blog</h1>
                <nav className="nav">
                    <NavLink to="/" exact className="nav-link" activeClassName="active-link">Home</NavLink>
                    <NavLink to="/login" className="nav-link" activeClassName="active-link">Login</NavLink>
                    <NavLink to="/register" className="nav-link" activeClassName="active-link">Register</NavLink>
                    <NavLink to="/create-recipe" className="nav-link" activeClassName="active-link">Create Recipe</NavLink>
                    <NavLink to="/recipes" className="nav-link" activeClassName="active-link">Recipes</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;

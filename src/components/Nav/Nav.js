import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Nav = () => {
    return (
        <div className="nav-container">
            <Link to='/'>
                <h1>SpaceX Launch App 🚀</h1>
            </Link>
        </div>
    )
}
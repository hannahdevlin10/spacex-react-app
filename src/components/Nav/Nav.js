import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Nav = () => {
    return (
        <div className="nav-container">
            <h1>
                 <Link to='/'>
                    SpaceX Launch App 🚀
                </Link>
            </h1>
        </div>
    )
}
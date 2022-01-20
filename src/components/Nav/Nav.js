import React from 'react';
import { Link, BrowserRouter as Router, } from 'react-router-dom';
import './style.css';

export const Nav = () => {
    return (
        <div className="nav-container">
            <h1>
                <Router>
                    <Link to='/'>
                        SpaceX Launch App 🚀
                    </Link>
                </Router>
            </h1>
        </div>
    )
}
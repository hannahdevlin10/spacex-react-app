import React from 'react';
import CardList from '../CardList/CardList';
import './style.css';

export const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div style={{ width: '75%' }}>  
                <div className="dashboard-header">
                    Last Launches
                </div>
                <CardList />
            </div>
        </div>
    )
}
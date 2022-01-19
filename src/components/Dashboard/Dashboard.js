import React, { useContext } from 'react';
import { MissionsContext } from '../../context/MissionsContext';
import CardList from '../CardList/CardList';
import './style.css';

export const Dashboard = () => {
    const { missions, setSelectedMission } = useContext(MissionsContext);

    const handleClick = (missionClicked) => {
        setSelectedMission(missionClicked)
    }

    return (
        <div className="dashboard-container">
            <div style={{ width: '75%' }}>  
                <div className="dashboard-header">
                    Last Launches
                </div>
                <CardList options={missions} onCardClick={handleClick} cardListType="missions" />
            </div>
        </div>
    )
}
import React, { useContext } from 'react';
import { MissionsContext } from '../../context/MissionsContext';
import CardList from '../CardList/CardList';
import './style.css';

export const MissionList = () => {
    const { missions, setSelectedMission } = useContext(MissionsContext);

    const handleClick = (missionClicked) => {
        setSelectedMission(missionClicked)
    }

    return (
        <div className="mission-list-container">
            <div style={{ width: '75%' }}>  
                <div className="mission-list-header">
                    Last Launches
                </div>
                <CardList options={missions} onCardClick={handleClick} cardListType="missions" />
            </div>
        </div>
    )
}
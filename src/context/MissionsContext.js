import React, { useState } from 'react';

export const MissionsContext = React.createContext(null);

export const MissionsProvider = ({ children }) => {
    const [missions, setMissions] = useState(null);
    const [selectedMission, setSelectedMission] = useState(null);

    return (
        <MissionsContext.Provider value={{ missions, setMissions, selectedMission, setSelectedMission }}>
            { children }
        </MissionsContext.Provider>
    )
}
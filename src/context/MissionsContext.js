import React, { useState } from 'react';

export const MissionsContext = React.createContext(null);

export const MissionsProvider = ({ children }) => {
    const [missions, setMissions] = useState(null);

    return (
        <MissionsContext.Provider value={{ missions, setMissions }}>
            { children }
        </MissionsContext.Provider>
    )
}
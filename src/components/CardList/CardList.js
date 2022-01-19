import React, { useContext } from 'react'
import { MissionsContext } from '../../context/MissionsContext'
import { CardItem } from './CardItem/CardItem'
import './style.css'

const CardList = () => {
    const { missions, setSelectedMission } = useContext(MissionsContext);

    const formatDate = (dateToConvert) => {
        function pad(s) {
            return (s < 10) ? '0' + s : s
        }
        let d = new Date(dateToConvert)
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
    }

    const handleClick = (missionClicked) => {
        setSelectedMission(missionClicked)
    }

    return (
        <>
            <ul className="cards">
                {missions?.map((mission) => (
                    <CardItem
                        id={mission?.id}
                        onClick={() => handleClick(mission)}
                        title={mission?.mission_name} 
                        description={mission?.details}
                        date={formatDate(mission?.launch_date_local)} />
                ))}
            </ul>
        </>
    )
}

export default CardList
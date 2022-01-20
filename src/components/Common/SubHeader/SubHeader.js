import React from 'react'
import { dateConverter } from '../../../utils/dateConverter/dateConverter'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { Tooltip } from '@mui/material'
import './style.css'

export default function SubHeader ({ launchDate, launchSite }) {
    return (
        <div className="subheader-container">
            <div className="subheader-row">
                <div className="subheader-icon">
                    <Tooltip title="Launch Date">
                        <CalendarTodayIcon />
                    </Tooltip>
                </div>
                {dateConverter(launchDate)}
            </div>
            <div className="subheader-row">
                <div className="subheader-icon">
                    <Tooltip title="Launch Location">
                        <FmdGoodIcon />
                    </Tooltip>
                </div>
                {launchSite}
            </div>
        </div>
    )
}
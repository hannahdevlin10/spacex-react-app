import React, { useContext, useState } from 'react'
import { MissionsContext } from '../../../context/MissionsContext';

import { IconButton, Popover, Tooltip } from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './style.css'

export const HeaderSection = () => {
    const { selectedMission } = useContext(MissionsContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;  

    return (
        <div style={{ display: 'flex'}}>
            <div className="view-mission-header">
                {selectedMission?.mission_name}
            </div>
            <div className="more-info-icon" style={{ display: !selectedMission?.links.article_link && !selectedMission?.links.video_link ? 'none' : 'flex'}}>
                <Tooltip title="More Info">
                    <IconButton onClick={handlePopoverClick} >
                        <MoreHorizIcon className="icon" aria-describedby={id}>
                            See More
                        </MoreHorizIcon>
                    </IconButton>
                </Tooltip>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'left',
                        horizontal: 'right',
                    }}>
                    <div className="more-info-container">
                        {selectedMission?.links.article_link &&
                            <div className="more-info-link-item">
                                <ArticleIcon />
                                <a href={selectedMission?.links.article_link}>View Article</a>
                            </div>
                        }
                        {selectedMission?.links.video_link &&
                            <div className="more-info-link-item">
                                <YouTubeIcon style={{ color: 'red' }} />
                                <a href={selectedMission?.links.video_link}>Watch Video</a>
                            </div>
                        }
                    </div>
                </Popover>
            </div>
        </div>
    )
}
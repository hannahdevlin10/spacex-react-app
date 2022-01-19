import React, { useContext } from 'react'
import { MissionsContext } from '../../context/MissionsContext'
import { NoImage } from '../Common/NoImage/NoImage';
import { Button, IconButton, Popover, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './style.css'

export const ViewMission = () => {
    const { selectedMission } = useContext(MissionsContext);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;  

    console.log(selectedMission)
    return (
        <div className="view-mission-container">
            <div style={{ width: '75%' }}>
                <div style={{ display: 'flex'}}>
                    <div className="view-mission-header">
                        {selectedMission?.mission_name}
                    </div>
                    <div style={{ display: 'flex', width: '3%', margin: 'auto', paddingTop: 0, paddingBottom: 0 }}>
                        <IconButton onClick={handleClick} >
                            <MoreHorizIcon aria-describedby={id} style={{ color: 'white', fontSize: 32 }}>
                                See More
                            </MoreHorizIcon>
                        </IconButton>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>
                                <div>
                                    {selectedMission?.links.article_link &&
                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                            <ArticleIcon />
                                            <a href={selectedMission?.links.article_link} style={{ padding: '0px' }}>View Article</a>
                                        </div>
                                    }
                                    {selectedMission?.links.video_link &&
                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                            <YouTubeIcon />
                                            <a href={selectedMission?.links.video_link} style={{ padding: '0px 8px' }}>Watch Video</a>
                                        </div>
                                    }
                                </div>
                            </Typography>
                        </Popover>
                    </div>
                </div>
                {/* <div>
                    <NoImage />
                </div> */}
                <div className="view-mission-section-text" style={{ fontSize: 20, padding: '30px', color: 'white' }}>
                    {selectedMission?.details}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <div style={{ textAlign: 'center' }}>
                    <div className="view-mission-subheader">
                        Mission Ships
                    </div>
                    <div>
                        <ul class="ships">
                            <li class="ships_item">
                                <div class="ship">
                                    <div class="ship_image">
                                        <img src="https://picsum.photos/500/300/?image=10"/>
                                    </div>
                                    <div class="ship_content">
                                        <h2 class="ship_title">Card Grid Layout</h2>
                                        <p class="ship_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                    </div>
                                </div>
                            </li>
                            <li class="ships_item">
                                <div class="ship">
                                    <div class="ship_image">
                                        <img src="https://picsum.photos/500/300/?image=5"/>
                                    </div>
                                    <div class="ship_content">
                                        <h2 class="ship_title">Card Grid Layout</h2>
                                        <p class="ship_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                    </div>
                                </div>
                            </li>
                            <li class="ships_item">
                                <div class="ship">
                                    <div class="ship_image">
                                        <img src="https://picsum.photos/500/300/?image=11"/>
                                    </div>
                                    <div class="ship_content">
                                        <h2 class="ship_title">Card Grid Layout</h2>
                                        <p class="ship_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                    </div>
                                </div>
                            </li>
                            <li class="ships_item">
                                <div class="ship">
                                    <div class="ship_image">
                                        <img src="https://picsum.photos/500/300/?image=14"/>
                                    </div>
                                    <div class="ship_content">
                                        <h2 class="ship_title">Card Grid Layout</h2>
                                        <p class="ship_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                    </div>
                                </div>
                            </li>
                            <li class="ships_item">
                                <div class="ship">
                                    <div class="ship_image">
                                        <img src="https://picsum.photos/500/300/?image=17"/>
                                    </div>
                                    <div class="ship_content">
                                        <h2 class="ship_title">Card Grid Layout</h2>
                                        <p class="ship_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                    </div>
                                </div>
                            </li>
                            <li class="ships_item">
                                <div class="ship">
                                    <div class="ship_image">
                                        <img src="https://picsum.photos/500/300/?image=2"/>
                                    </div>
                                    <div class="ship_content">
                                        <h2 class="ship_title">Card Grid Layout</h2>
                                        <p class="ship_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>    
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
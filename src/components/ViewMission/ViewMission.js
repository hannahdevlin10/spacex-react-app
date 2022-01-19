import React, { useContext } from 'react'
import { MissionsContext } from '../../context/MissionsContext'
import CardList from '../CardList/CardList';
import SlideShow from '../Common/Slideshow/Slideshow';
import { IconButton, Popover, Typography } from '@mui/material';
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
                    <div style={{ display: !selectedMission?.links.article_link && !selectedMission?.links.video_link ? 'none' : 'flex', width: '3%', margin: 'auto', paddingTop: 0, paddingBottom: 0 }}>
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
                {selectedMission?.links?.flickr_images?.length ? (
                    <SlideShow auto={true} loop={true} images={selectedMission?.links?.flickr_images} />
                    ) : ('')
                }
                <div
                    className="view-mission-section-text"
                    style={{
                        fontSize: 20,
                        padding: '30px',
                        color: 'white',
                        marginBottom: 68,
                        marginTop: 40
                        }}>
                    {selectedMission?.details}
                </div>
                {selectedMission?.ships?.length ? (
                    <div>
                        <hr></hr>
                        <div style={{ textAlign: 'center' }}>
                            <div className="view-mission-subheader">Mission Ships</div>
                            <CardList options={selectedMission?.ships} cardListType="ships" />
                        </div>
                    </div>
                    ) : ('')
                }
            </div>
        </div>
    )
}
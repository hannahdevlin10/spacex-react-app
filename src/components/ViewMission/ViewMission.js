import React, { useContext, useState } from 'react'
import { MissionsContext } from '../../context/MissionsContext'
import CardList from '../CardList/CardList';
import SlideShow from '../Common/Slideshow/Slideshow';
import SubHeader from '../Common/SubHeader/SubHeader';
import { RocketDetail } from './RocketDetail/RocketDetail';
import { Box, IconButton, Modal, Popover, Tooltip } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './style.css'

export const ViewMission = () => {
    const { selectedMission } = useContext(MissionsContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedShip, setSelectedShip] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = (ship) => {
        setSelectedShip(ship)
        setModalOpen(true)
    };

    const handleModalClose = () => setModalOpen(false);

    const handlePopoverClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;  

    return (
        <div className="view-mission-container">
            <div style={{ width: '75%' }}>
                <div style={{ display: 'flex'}}>
                    <div className="view-mission-header">
                        {selectedMission?.mission_name}
                    </div>
                    <div style={{ display: !selectedMission?.links.article_link && !selectedMission?.links.video_link ? 'none' : 'flex', width: '3%', margin: 'auto', paddingTop: 0, paddingBottom: 0 }}>
                        <Tooltip title="Details">
                            <IconButton onClick={handlePopoverClick} >
                                <MoreHorizIcon aria-describedby={id} style={{ color: 'white', fontSize: 32 }}>
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
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}
                        >
                            <div style={{ fontSize: 18, padding: '12px' }}>
                                {selectedMission?.links.article_link &&
                                    <div className="more-info-link-item">
                                        <ArticleIcon />
                                        <a href={selectedMission?.links.article_link} style={{ paddingLeft: '10px' }}>View Article</a>
                                    </div>
                                }
                                {selectedMission?.links.video_link &&
                                    <div className="more-info-link-item">
                                        <YouTubeIcon style={{ color: 'red' }} />
                                        <a href={selectedMission?.links.video_link} style={{ paddingLeft: '10px' }}>Watch Video</a>
                                    </div>
                                }
                            </div>
                        </Popover>
                    </div>
                </div>
                <div className="subheader-main-container">
                    <SubHeader launchDate={selectedMission?.launch_date_local} launchSite={selectedMission?.launch_site?.site_name_long} />
                </div>
                {selectedMission?.links?.flickr_images?.length ? (
                    <SlideShow auto={true} loop={true} images={selectedMission?.links?.flickr_images} />
                    ) : ('')
                }
                {selectedMission?.details && 
                    <div className="view-mission-section-text">
                        {selectedMission?.details}
                    </div>
                }
                {selectedMission?.ships?.length ? (
                    <div style={{ marginBottom: 60 }}>
                        <hr></hr>
                        <div style={{ textAlign: 'center' }}>
                            <div className="view-mission-subheader">Mission Ships</div>
                            <CardList onCardClick={handleModalOpen} options={selectedMission?.ships} cardListType="ships" />
                        </div>
                    </div>
                    ) : ('')
                }
                <Modal open={modalOpen} onClose={handleModalClose}>
                    <Box className="modal-container">
                        <div className="modal-content">
                            <img src={selectedShip?.image} alt="selected-ship-img" />
                        </div>
                    </Box>
                </Modal>
                {selectedMission?.rocket && 
                    <div>
                        <hr></hr>
                        <RocketDetail />
                    </div>
                }
            </div>
        </div>
    )
}
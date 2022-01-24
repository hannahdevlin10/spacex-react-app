import React, { useContext, useState } from 'react'
import { MissionsContext } from '../../context/MissionsContext'

import CardList from '../CardList/CardList';
import SlideShow from '../Common/Slideshow/Slideshow';
import SubHeader from '../Common/SubHeader/SubHeader';
import { HeaderSection } from './HeaderSection/HeaderSection';
import { RocketDetail } from './RocketDetail/RocketDetail';
import { Box, Modal } from '@mui/material';

import './style.css'

export const ViewMission = () => {
    const { selectedMission } = useContext(MissionsContext);
    const [selectedShip, setSelectedShip] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = (ship) => {
        setSelectedShip(ship)
        setModalOpen(true)
    };

    const handleModalClose = () => setModalOpen(false);

    return (
        <div className="view-mission-container">
            <div style={{ width: '75%' }}>
                
                <HeaderSection />

                <div className="subheader-main-container">
                    <SubHeader
                        launchDate={selectedMission?.launch_date_local}
                        launchSite={selectedMission?.launch_site?.site_name_long} />
                </div>

                {selectedMission?.links?.flickr_images?.length && 
                    <SlideShow
                        auto={true}
                        loop={true}
                        images={selectedMission?.links?.flickr_images} />
                }

                {selectedMission?.details && 
                    <div className="view-mission-section-text">
                        {selectedMission?.details}
                    </div>
                }

                {selectedMission?.ships?.length && 
                    <div style={{ marginBottom: 60 }}>
                        <hr></hr>
                        <div style={{ textAlign: 'center' }}>
                            <div className="view-mission-subheader">
                                Mission Ships
                            </div>
                            <CardList
                                onCardClick={handleModalOpen}
                                options={selectedMission?.ships}
                                cardListType="ships" />
                        </div>
                    </div>
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
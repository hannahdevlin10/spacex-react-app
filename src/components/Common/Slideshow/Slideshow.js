import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { IconButton } from '@mui/material';
import { PauseCircleOutline, PlayCircleOutline } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import './style.css';

export default function SlideShow ({ images, loop }) {
    const [isPlaying, setIsPlaying] = useState(true)

    const handleControlClick = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else if (!isPlaying) {
            setIsPlaying(true);
        }
    }

    return (
        <div className="slideshow-container">
            <div className="slideshow-controls">
                {!isPlaying ? (
                    <Tooltip title="Play Slideshow" onClick={handleControlClick}>
                        <IconButton>
                            <PlayCircleOutline className="control-icon" />
                        </IconButton>
                    </Tooltip>
                    ) : (
                    <Tooltip title="Pause Slideshow" onClick={handleControlClick}>
                        <IconButton>
                            <PauseCircleOutline className="control-icon" />
                        </IconButton>
                    </Tooltip>
                    )
                }
            </div>
            <div className="slideshow">
                <Carousel
                    showStatus={false}
                    showArrows={false}
                    autoPlay={isPlaying}
                    infiniteLoop={loop}
                    interval={3000}
                    showThumbs={false}>
                        {images?.map((image) => (
                            <div>
                                <img src={image} alt="slideshow-img" />
                            </div>
                        ))}
                </Carousel>
            </div>
        </div>
    )
}
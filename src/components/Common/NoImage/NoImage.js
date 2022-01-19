import React from 'react'
import defaultImg from '../../../assets/images/default-img.png'
import './style.css'

export const NoImage = () => {
    return (
        <div className="no-img-container">
            <div className="no-img-content">
                <img src={defaultImg} alt='no-img' width={170} />
                <p>No image available</p>
            </div>
        </div>
    )
}
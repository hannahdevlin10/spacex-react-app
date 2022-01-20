import React from 'react'
import { Link } from 'react-router-dom'
import { textShortener } from '../../../utils/textShortener/textShortener';
import NoDescription from '../../Common/NoDescription/NoDescription';
import './style.css'

export const CardItem = ({ id, title, description, date, onClick, image }) => {
    return (
        <li className="cards-item">
          <Link to={`/mission/${id}`}>
            <div className="card" id={id} onClick={onClick && onClick} >
                <div className="card-content">
                    <h2 className="card-title">{title && title}</h2>
                    <p className="card-text">
                        {description
                            ? textShortener(description, 200)
                            : <NoDescription />}
                    </p>
                    <div className="card-date" style={{ textAlign: 'right' }}>
                        {date && date}
                    </div>
                    <div className="card-image">
                        {image && <img src={image} alt={`Img ${title && title}`} /> }
                    </div>
                </div>
            </div>
          </Link>
        </li>
    )
}
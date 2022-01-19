import React from 'react'
import { Link } from 'react-router-dom'
import NoDescription from '../../Common/NoDescription/NoDescription';
import { shortener } from '../../../utils/textShortener';

export const CardItem = ({ id, title, description, date, onClick, image }) => {
    return (
        <li className="cards_item">
          <Link to={`/mission/${id}`}>
            <div className="card" id={id} onClick={onClick && onClick} >
                <div className="card_content">
                    <h2 className="card_title">{title && title}</h2>
                    <p className="card_text">
                        {description
                            ? shortener(description, 200)
                            : <NoDescription />}
                    </p>
                    <div className="card_text" style={{ textAlign: 'right' }}>
                        {date && date}
                    </div>
                    <div className="card_image">
                        {image && <img src={image} alt={`Img ${title && title}`} /> }
                    </div>
                </div>
            </div>
          </Link>
        </li>
    )
}
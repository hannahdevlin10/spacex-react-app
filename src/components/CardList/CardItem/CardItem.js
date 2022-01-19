import React from 'react'
import { Link } from 'react-router-dom'
import NoDescription from '../../Common/NoDescription/NoDescription';

export const CardItem = ({ id, title, description, date, onClick }) => {

    const shortener = (str, limit) => {
        let sub = str.substring(0, limit);
        return (
            <div> 
                {sub.length >= limit ? (
                <div>
                    {sub} ...
                </div>
                ) : (
                <div>
                    {sub}
                </div>
                )}
            </div>
        );
    }

    return (
        <li className="cards_item">
          <Link to={`/mission/${id}`}>
            <div className="card" id={id} onClick={onClick} >
                <div className="card_content">
                    <h2 className="card_title">{title}</h2>
                    <p className="card_text">
                        {description
                            ? shortener(description, 200)
                            : <NoDescription />}
                    </p>
                    <p className="card_text" style={{ textAlign: 'right' }}>
                        {date}
                    </p>
                </div>
            </div>
          </Link>
        </li>
    )
}
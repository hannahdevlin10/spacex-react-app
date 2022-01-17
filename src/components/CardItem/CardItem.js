import React from 'react'

export const CardItem = ({ title, description, date }) => {
    return (
        <li className="cards_item">
            <div className="card">
                <div className="card_content">
                    <h2 className="card_title">{title}</h2>
                    <p className="card_text">
                        {description ? description : 'No description available'}
                    </p>
                    <p className="card_text">{date}</p>
                </div>
            </div>
        </li>
    )
}
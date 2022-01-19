import React from 'react'
import { dateConverter } from '../../utils/dateConverter'
import { CardItem } from './CardItem/CardItem'
import './style.css'

const CardList = ({ options, onCardClick, cardListType }) => {
    return (
        <>
            <ul className="cards">
                {options?.map((option) => (
                    cardListType === 'missions' ? (
                        <CardItem
                            id={option?.id}
                            onClick={() => onCardClick(option)}
                            title={option?.mission_name} 
                            description={option?.details}
                            date={dateConverter(option?.launch_date_local)} />
                    ) : cardListType === 'ships' ? (
                        <CardItem
                            id={option?.name}
                            title={option?.name} 
                            description={option?.home_port} 
                            image={option?.image} />
                        ) : ('')
                ))}
            </ul>
        </>
    )
}

export default CardList
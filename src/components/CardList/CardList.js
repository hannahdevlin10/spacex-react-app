import React from 'react'
import { dateConverter } from '../../utils/dateConverter/dateConverter'
import { CardItem } from './CardItem/CardItem'
import './style.css'

const CardList = ({ options, onCardClick, cardListType }) => {
    return (
        <>
            <ul className="cards">
                {options?.map((option, key) => (
                    cardListType === 'missions' ? (
                        <CardItem
                            id={option?.id}
                            key={key}
                            onClick={() => onCardClick(option)}
                            title={option?.mission_name} 
                            description={option?.details}
                            date={dateConverter(option?.launch_date_local)} />
                    ) : cardListType === 'ships' ? (
                        <CardItem
                            id={option?.name}
                            key={key}
                            title={option?.name} 
                            onClick={() => onCardClick(option)}
                            description={option?.home_port} 
                            image={option?.image} />
                        ) : ('')
                ))}
            </ul>
        </>
    )
}

export default CardList
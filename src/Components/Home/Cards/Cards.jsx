import React from 'react';
import s from './Cards.module.css';
import Box from './Box/Box';

const Cards = (props) => {

    let cardsElement = props.state.map(card => 
    < Box key = {card.id} id = {card.id} title = {card.title} text = {card.text} img = {card.img}/>)

    return (
        <div className={s.cards}>
            <p className={s.boxTitle}>Our Services</p>
            <div className={s.cardsBoxes}>
                {cardsElement}
            </div>
        </div>
    );
}

export default Cards;

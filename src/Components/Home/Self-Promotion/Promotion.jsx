import React from 'react';
import s from './Promotion.module.css';
import Prom from './Prom/Prom';

const Promotion = (props) => {
    
    let promElements = props.state.map(prom => <Prom key = {prom.id} id = {prom.id} title = {prom.title} description = {prom.description} img = {prom.img} />)

    return (
        <div className={s.promotion}>
            <p className={s.title}>
                Why Choose Ballard Dentistry?
            </p>
            <p className={s.description}>
                Our mission is to provide the highest 
                quality dental care in a modern, comfortable 
                environment. Here's what sets us apart:
            </p>
            <div className={s.box}>
                {promElements}
            </div>
        </div>
    );
}

export default Promotion;

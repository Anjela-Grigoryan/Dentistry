import React from 'react';
import s from '../Promotion.module.css';

const Prom = (props) => {
    return (
        <div className={s.prom}>
            <img className={s.img} src={props.img} alt="" />
            <p className={s.firstText}>
                {props.title}
            </p>
            <p className={s.smallText}>
                {props.description}
            </p>
        </div>
    );
}

export default Prom;

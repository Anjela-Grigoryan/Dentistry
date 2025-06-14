import React from 'react';
import s from '../Cards.module.css'

const Box = (props) => {
    return (
        <div className={s.box}>
            <div className={s.container}>
                <img src={props.img} alt="" />
                <p className={s.title}>
                    {props.title}
                </p>
                <p className={s.description}>
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default Box;

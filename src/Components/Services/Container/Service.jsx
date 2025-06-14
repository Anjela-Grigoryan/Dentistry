import React from 'react';
import s from "../Services.module.css";

const Service = (props) => {
    return (
        <div>
            <img src={props.img} alt="" />
            <p> {props.text} </p>
        </div>
    );
}

export default Service;

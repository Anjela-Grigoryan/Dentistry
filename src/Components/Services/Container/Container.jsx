import React from 'react';
import s from "../Services.module.css";
import Service from './Service';

const Container = (props) => {

    let serviceElement = props.state.map(service => < Service key = {service.id} id = {service.id} img = {service.img} text = {service.text}/>)

    return (
        <div className={s.container}>
            {serviceElement}
        </div>
    );
}

export default Container;

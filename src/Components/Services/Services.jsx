import React from 'react';
import s from "./Services.module.css";
import Banner from './Banner/Banner';
import Container from './Container/Container';
import Footer from '../Footer/Footer';

const Services = (props) => {
    return (
        <div className={s.services}>
            < Banner />
            < Container state = {props.state} />
            < Footer />
        </div>
    );
}

export default Services;

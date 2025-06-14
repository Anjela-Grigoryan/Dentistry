import React from 'react';
import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <p className={s.text}>
                Ready for a healthy, beautiful smile?
            </p>
            <button className={s.btn}><NavLink to="/Contacts">Book an Appointment</NavLink></button>
        </footer>
    );
}

export default Footer;

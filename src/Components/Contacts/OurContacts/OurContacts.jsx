import React from 'react';
import s from '../Contacts.module.css'

const OurContacts = () => {
    return (
        <div className={s.contacts}>
            <p className={s.title}>Our contacts</p>
            <div className={s.box}>
                <p className={s.contactType}>Number</p>
                <p className={s.contact}>+12345678</p>
            </div>
            <div className={s.box}>
                <p className={s.contactType}>Email</p>
                <p className={s.contact}>dentistry@gmail.com</p>
            </div>
            <div className={s.box}>
                <p className={s.contactType}>Adress</p>
                <p className={s.contact}>////</p>
            </div>
        </div>
    );
}

export default OurContacts;

import React from 'react';
import s from "./Contacts.module.css";
import OurContacts from './OurContacts/OurContacts';
import BookForm from './BookForm/BookForm';

const Contacts = () => {
    return (
        <div className={s.container}>
            < OurContacts />
            < BookForm />
        </div>
    );
}

export default Contacts;

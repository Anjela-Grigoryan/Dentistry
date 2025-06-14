import React from 'react';
import s from '../Contacts.module.css'

const BookForm = () => {
    return (
        <form className={s.form}>
            <input className={s.input} type="text" name='name' placeholder='Enter your name'/>
            <input className={s.input} type="text" name='number' placeholder='Enter your number'/>
            <input className={s.input} type="text" name='day' placeholder='Day'/>
            <textarea name="comment" placeholder='Comment'></textarea>
            <input type="submit" className={s.btn} name='submit' value='send'/>
        </form>
    );
}

export default BookForm;

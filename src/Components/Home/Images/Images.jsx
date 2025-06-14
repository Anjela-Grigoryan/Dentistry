import React from 'react';
import s from './Images.module.css';

const Images = () => {
    return (
        <div className={s.images}>
            <img src="./Images/img1.png" alt="" />
            <img src="./Images/img2.png" alt="" />
            <img src="./Images/img3.png" alt="" />
            <img src="./Images/img4.png" alt="" />
        </div>
    );
}

export default Images;

import React from 'react';
import s from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={s.bunner} style={{backgroundImage: `url('Images/teeth.jpeg')`}}>
            <div className={s.text}>
                Create your incredible smile
            </div>
        </div>
    );
}

export default Banner;

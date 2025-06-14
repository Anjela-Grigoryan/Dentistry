import React from 'react';
import s from './Banner.module.css';

const Banner = () => {
    return (
        <div className={s.bunner} style={{backgroundImage: `url('Images/banner.png')`}} >
            <div className={s.text}>
                <p className={s.first}>Welcome to Ballard Dentistry</p>
                <p className={s.second}>
                    Our modern dental studio is designed to 
                    make you feel relaxed and comfortable. 
                    We offer a full range of dental <br></br> services, 
                    from routine cleanings to cosmetic procedures.
                </p>
            </div>
        </div>
    );
}

export default Banner;

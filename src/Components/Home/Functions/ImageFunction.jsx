import React from 'react';
import s from '../Comments/Comments.module.css';

const ImageFunction = (props) => {
    let img = "./Images/star.png"
    let images = Array(props.stars).fill(img);

    return (
        images.map((imgs, i) => (
            <img key={i} src={imgs} alt="" />
        ))
    )
}

export default ImageFunction;

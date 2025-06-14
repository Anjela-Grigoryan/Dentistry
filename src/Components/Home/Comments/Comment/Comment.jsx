import React from 'react';
import s from '../Comments.module.css';
import ImageFunction from '../../Functions/ImageFunction';

const Comment = (props) => {
    

    return (
        <div className={s.boxes}>
            <p className={s.name}>
                {props.name}
            </p>
            <p className={s.when}>
                {props.date}
            </p>
            <ImageFunction stars = {props.stars}/>
            <p className={s.comment}>
                {props.comment}
            </p>
            <div className={s.usefulness}>
                <div className={s.likes}>
                    <img className={s.like} src="./Images/like.png" alt="" />
                    <p className={s.likesCount}>{props.likes}</p>
                </div>
                <div className={s.dislikes}>
                    <img className={s.dislike} src="./Images/dislike.png" alt="" />
                    <p className={s.dislikesCount}>{props.dislikes}</p>
                </div>
            </div>
        </div>
    );
}

export default Comment;

import React from 'react';
import s from './Comments.module.css';
import Comment from './Comment/Comment';

const Comments = (props) => {

    let commentsElement = props.state.map(comment => 
    <Comment key = {comment.id} id = {comment.id} name = {comment.name} date = {comment.date} 
    comment = {comment.comment} likes = {comment.likes} dislikes = {comment.dislikes} stars = {comment.stars}/>) 

    return (
        <div className={s.comments}>
            <p className={s.title}>
                What our patients are saying
            </p>
            {commentsElement}
        </div>
    );
}

export default Comments;

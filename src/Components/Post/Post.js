import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export const Post = (props) => {
    const title = props.title;
    const author = props.author;

    //Function from App.js that opens modal and sets it to current post
    const handleClick = props.onClick;

    return (
        <li className="post-wrap" onClick={handleClick}>
            <div className="post-box-wrap">
                <h2 className="post-title">{title}</h2>
                <h4 className="post-author">By: {author}</h4>
            </div>
        </li>
    );

};

/* Ensures that props passed are of the mentioned type */
/* Side Note: In TypeScript, this is taken care of, but not in JavaScript */
Post.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string
};
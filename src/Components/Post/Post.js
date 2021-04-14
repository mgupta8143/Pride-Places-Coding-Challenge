import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export const Post = (props) => {
    const title = props.title;
    const author = props.author;
    const handleClick = props.onClick;

    return (
        <li className="post-wrap" key={props.key} onClick={handleClick}>
            <div className="post-box-wrap">
                <h2 className="post-title">{title}</h2>
                <h4 className="post-author">By: {author}</h4>
            </div>
        </li>
    );

};

Post.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string
}
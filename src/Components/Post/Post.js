import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export const Post = (props) => {
    const title = props.title;
    const author = props.author;



    return (
        <li className="post-wrap" key={props.key}>
            <div className="post-box-wrap">
                <h2 className="post-title">{title}</h2>
                <h4>By: {author}</h4>
            </div>
        </li>
    );

    

};
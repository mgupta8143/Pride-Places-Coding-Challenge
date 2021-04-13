import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export const Post = (props) => {
    const title = props.title;
    const author = props.author;
    console.log(author);
    return (
        <li className="post-wrap" key={props.key}>
            <div className="post-box-wrap">
                <h2>{title}</h2>
                {author}
            </div>
        </li>
    );

    

};
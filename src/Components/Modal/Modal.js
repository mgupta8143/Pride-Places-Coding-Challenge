import React from 'react';
import { IoCloseOutline} from 'react-icons/io5';
import PropTypes from 'prop-types';
import "./Modal.css";

export const Modal = (props) => {

    const post = props.post;
    const visible = props.visible;

    
    return (
        <div id="whole-wrap" className={visible ? "": "hide"} >
            <div id="modal-wrap" >
                <div id = "close-btn-wrap">
                    <IoCloseOutline id="close-btn" onClick={props.closeModal}/>
                </div>
                <div id="post-container">
                    <h2 id="post-title">{post.title}</h2>
                    <h4 id="post-author">By {post.author} 
                        <i id="post-phrase">"{post.catchPhrase}"</i>
                    </h4>
        
                    <div id="line-break-wrap">
                        <div id="line-break"></div>
                    </div>
                    <p id ="post-body">{post.body}</p>
                </div>
            </div>
        </div>
    );

    //closing Modal should be in thi
};

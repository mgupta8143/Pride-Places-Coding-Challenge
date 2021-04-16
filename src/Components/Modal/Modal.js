import React, { useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5'; //react-icons is a library for importing common icon designs easily
import "./Modal.css";

export const Modal = (props) => {

    //post to be displayed on modal
    const post = props.post;

    //whether modal should be visible or not
    const visible = props.visible;

     /**
     * If DOM element in evt.target is clicked (not including children), modal is closed
     * @param {SyntheticEvent} evt object holding information about DOM element event handler is used on  
     */
    const closeOutsideModal = (evt) => {
        evt.preventDefault();
        if(visible && evt.target === evt.currentTarget) {
            props.closeModal();
        }
    }

    /* Whenever modal is open, the rest of scroll is turned off */
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = visible ? 'hidden' : 'auto';
      }, [visible])

    return (
            <div id="whole-wrap" className={visible ? "": "hide"} onClick={closeOutsideModal}>
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

};

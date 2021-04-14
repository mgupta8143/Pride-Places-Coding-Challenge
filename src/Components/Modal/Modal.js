import React from 'react';
import { IoCloseOutline} from 'react-icons/io5';
import "./Modal.css";

export const Modal = (props) => {

    const post = props.post;
    const visible = props.visible;

    const closeOutsideModal = (evt) => {
        evt.preventDefault();
        if(visible && evt.target === evt.currentTarget) {
            props.closeModal();
        }
    }

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

    //closing Modal should be in thi
};

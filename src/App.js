/* Importing necessary sub components for web app */
import React, { useState, useEffect } from 'react';
import { Navbar } from './Components/NavBar/NavBar';
import { Post } from './Components/Post/Post';
import { Modal } from './Components/Modal/Modal';
import './App.css';

//Acts as a container for the posts, modal, and navigation bar
function App() {

  //Stores all the posts from the API
  const [posts, setPosts] = useState([]);

  //Stores all the users from the API
  const [users, setUsers] = useState([]);

  //Current post to be displayed on modal
  const [currentPost, setCurrentPost] = useState({
    title: "",
    author: "",
    catchPhrase: "",
    body: ""
  });

  //Stores whether modal is visible or not
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  }

  const requestPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setPosts(json))
    .catch(() => console.log("error"));
  };

  const requestUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setUsers(json))
    .catch(() => console.log("error"));
  }


  /**
   * Returns author name corresponding to user id
   * @param {String} id  the userId returned from the API 
   */
  const getAuthorNameById = (id) => {
    id -= 1;
    if(id >= users.length || id < 0) {
      return "";
    }
    return users[parseInt(id)].name;
  };

  /**
   * Returns author catch phrase corresponding to user id
   * @param {String} id  the userId returned from the API 
   */
  const getAuthorCatchPhraseById = (id) => {
    id -= 1;
    if(id >= users.length || id < 0) {
      return "";
    }
    return users[parseInt(id)].company.catchPhrase;
  };

  /**
   * Sets current post to post in val and opens modal
   * @param {Object} val  post json object from API  
   */
  const handleClick = (val) => {
    setCurrentPost({
      title: val.title,
      author: getAuthorNameById(val.userId),
      catchPhrase: getAuthorCatchPhraseById(val.userId),
      body: val.body
    });

    openModal();
  };

  //initial fetch from API
  useEffect(() => {
      requestPosts();
      requestUsers();
  }, []);

  //returns nav, post list, and modal in that order
  return (
    <div className="body-wrap">
      <Navbar/>
      <ul id="post-container-wrap">

        {posts.map((val, index) => {
          return <Post 
                    key={index}
                    title={val.title}
                    author={getAuthorNameById(val.userId)}
                    body={val.body}
                    onClick={() => handleClick(val)}
                  />
        })}
      </ul>
      <Modal 
        post={currentPost}
        visible={modalVisible}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;

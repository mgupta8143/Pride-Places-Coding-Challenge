import React, { useState, useEffect } from 'react';
import { Navbar } from './Components/NavBar/NavBar';
import { Post } from './Components/Post/Post';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

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

  const getAuthorNameById = (id) => {
    id -= 1;
    if(id >= users.length || id < 0) {
      return "";
    }
    return users[parseInt(id)].name;
  };

  useEffect(() => {
      requestPosts();
      requestUsers();
  }, []);

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
                  />
        })}
      </ul>

      
    </div>
  );
}

export default App;

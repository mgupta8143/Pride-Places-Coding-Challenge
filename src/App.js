import React, { useState, useEffect } from 'react';
import { Navbar } from './Components/NavBar/NavBar';
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

  useEffect(() => {
      requestPosts();
      requestUsers();
  }, []);


  return (
    <div className="body-wrap">
      <Navbar/>
      <ul>
        {posts.map((val, index) => {
          return <li key={index}>{val.title}</li>
        })}
      </ul>



    </div>
  );
}

export default App;

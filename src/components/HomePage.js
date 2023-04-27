import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Cidium Security</h1>
      <p>
        Welcome to Cidium Security!<br></br> Here you can read about the latest
        cybersecurity news, tips and tricks, and more.
      </p>
      <h2>Latest Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body}</p>
          <p>
            By {post.author} on {post.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

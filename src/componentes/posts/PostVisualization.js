import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export function PostVisualization() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get('http://localhost:4000/posts')
      .then(res => {
        console.log(res.data);
        setListOfPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deletePost = post => {
    console.log(post._id);

    axios
      .post('http://localhost:4000/deletepost', { id: post._id })
      .then(res => {
        setListOfPosts(prev => prev.filter(prevPost => prevPost._id !== post._id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="text-center mt-3 mb-3">All Of Your Posts, {user.name}</h1>
      <div className="container-fluid d-flex justify-content-center mt-5" style={{ width: '70%' }}>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              {listOfPosts.map(post => (
                <li className="list-group-item d-flex justify-content-between align-items-center mb-3 text-justify" key={post._id}>
                  <div className="mt-1">
                    <h5 className="card-title mb-3">{post.postTitle}</h5>
                    <p className="text-justify">{post.postContent}</p>
                    <small className="text-muted">Autor: {post.userName}</small>
                    <div className="d-flex justify-content-end mt-2">
                      <button className="btn btn-danger btn-block" onClick={() => deletePost(post)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

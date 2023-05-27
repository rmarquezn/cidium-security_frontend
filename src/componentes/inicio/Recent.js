import React, { useEffect, useState } from 'react';
import axios from "axios";


export const Recent = () => {

    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/lastpost').then(res => {
          setListOfPosts(prev => [res.data, ...prev]);
        }).catch(err => {
          console.log(err);
        });
      }, []);

    

    return (
        <div className='d-flex justify-content-center align-items-top mt-5 mb-2'>
        <div className='container-fluid' style={{ width: '70%' }}>
      <div className='row'>
        <div className='col'>
          <ul className="list-group">
            {listOfPosts.map(post => (
              <li className="list-group-item d-flex justify-content-between align-items-center mb-3 text-justify" key={post._id}>
                <div className='mt-1'>
                  <h5 className="card-title mb-3">{post.postTitle}</h5>
                  <p className='text-justify'>{post.postContent}</p>
                  <small className="text-muted">Author: {post.userName}</small>
                 
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );

}

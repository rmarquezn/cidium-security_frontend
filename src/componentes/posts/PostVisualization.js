import React, { useEffect, useState } from 'react';
import axios from "axios";

export function PostVisualization() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/posts")
      .then(res => {
        console.log(res.data)
        setListOfPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const deletePost = (todo) => {
    console.log(todo._id)

    axios.post("http://localhost:4000/deletepost", { id: todo._id })
      .then(res => {
        setListOfPosts((prev) => prev.filter((prev) => prev._id !== todo._id));
      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <div className='flex mb-5 mt-5'>
      <ul className="list-group col mx-sm-3 mb-2 col-5">
        {listOfPosts.map((todo) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={todo._id} id='blogList'>
            {/* Acá es donde tienes que diseñar la salida */}
            <span>{todo.postContent}</span>
            <i className="bi bi-trash3-fill" onClick={() => deletePost(todo)}>O</i>
          </li>
        ))}
      </ul>
    </div>
  )
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://your-api-url/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h2>Comments</h2>
      {post.comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>Posted by: {comment.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostPage;

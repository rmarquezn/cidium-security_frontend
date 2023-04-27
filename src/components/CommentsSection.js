import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/api/posts/${postId}/comments`, { comment: newComment })
      .then((response) => {
        setComments([...comments, response.data]);
        setNewComment("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`/api/posts/${postId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [postId]);

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="new-comment">Add a comment: </label>
          <textarea
            id="new-comment"
            name="new-comment"
            value={newComment}
            onChange={handleCommentChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.body}</p>
          <p>
            By {comment.author} on {comment.date}
          </p>
          {comment.editable && <button>Edit</button>}
          {comment.deletable && <button>Delete</button>}
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;

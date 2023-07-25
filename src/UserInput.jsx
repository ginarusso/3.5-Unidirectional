import React, { useState } from 'react';

const UserInput = ({ onInputSubmit }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Create the new post object
    const newPost = {
      author: author,
      title: title,
      content: content,
    };

    // Call the onInputSubmit callback and pass the new post object
    onInputSubmit(newPost);

    // Clear the input fields after submitting
    setAuthor('');
    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title: </label>
      <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>Author: </label>
      <input type="text" value={author} required onChange={(e) => setAuthor(e.target.value)} />
      <br />
      <label>Post: </label>
      <input type="text" value={content} required onChange={(e) => setContent(e.target.value)} />
      <br />
      {/* Remove the submit button from the UserInput component */}
    </form>
  );
};

export default UserInput;

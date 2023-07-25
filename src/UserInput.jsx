import React from 'react';

const UserInput = ({ title, setTitle, author, setAuthor, content, setContent, addUserInput }) => {
  return (
    <>
      <label>Title: </label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <br />
      <label>Author: </label>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <br />
      <label>Post: </label>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} required />

      {/* Call the addUserInput callback function here */}
      {addUserInput && addUserInput()}
    </>
  );
};

export default UserInput;

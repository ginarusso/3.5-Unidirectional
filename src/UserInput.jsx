import React from 'react';
// taking all of the parameters and setting title, author, content in the UserInput
const UserInput = ({ title, setTitle, author, setAuthor, content, setContent}) => {
  return (
    // form elements not needed because submit button is no on this page
    <>
      <label>Title: </label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <br />
      <label>Author: </label>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <br />
      <label>Post: </label>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
{/* sends back to the blog (state set in Blog.jsx) */}
      {/* Call the addUserInput callback function here - shortcurcuiting */}
      {/* {addUserInput && addUserInput()} */}
    </>
  );
};

export default UserInput;

import React from 'react';

const BlogPost = ({ onPostSubmit, title, author, content }) => {
  function handleSubmit(e) {
    e.preventDefault()
    // Create the new post object with values from the input fields
    const post = {title, author, content}

    // Call the onPostSubmit callback in the Blog component with the new post object
    onPostSubmit({ post });
  }

  return (
    <div>
      {/* Render the submit button directly */}
      <button onClick={handleSubmit}>Submit Post</button>
    </div>
  );
};

export default BlogPost;

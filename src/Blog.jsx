import React, { useState } from 'react';
import BlogPost from './BlogPost';
import UserInput from './UserInput';

const Blog = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  function handleInputSubmit(newPost) {
    setListOfPosts((previousPosts) => {
      return [newPost, ...previousPosts];
    });
  }

  return (
    <>
      {/* Pass the handleInputSubmit function as the onInputSubmit callback */}
      <UserInput onInputSubmit={handleInputSubmit} />

      {/* Pass the handleInputSubmit function as the onPostSubmit callback */}
      <BlogPost onPostSubmit={handleInputSubmit} />

      {/* Loop through all the posts in the listOfPosts and render each post */}
      {listOfPosts.map((post, index) => (
        <div key={index}>
          {/* Add conditional checks to ensure post properties are defined */}
          {post.title && <h2>{post.title}</h2>}
          {post.author && <h3>{post.author}</h3>}
          {post.content && <p>{post.content}</p>}
          <hr />
        </div>
      ))}
    </>
  );
};

export default Blog;

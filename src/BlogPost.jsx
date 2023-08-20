import React from 'react';
// import UserInput from './UserInput';

const BlogPost = ({ addToList, title, setTitle, author, setAuthor, content, setContent }) => {
  // let [author, setAuthor] = useState('');
  // let [title, setTitle] = useState('');
  // let [content, setContent] = useState('');

  // set state in Blog.jsx instead

  function handleSubmit(e) {
    e.preventDefault();
    let post = { author, title, content };
    addToList(post);
    setAuthor('');
    setContent('');
    setTitle('');
  }

  // Define the addUserInput callback function
  // function addUserInput() {
  //   console.log('User input added!');
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Pass the addUserInput callback function as a prop */}
        {/* <UserInput
          title={title}
          author={author}
          content={content}
          setAuthor={setAuthor}
          setTitle={setTitle}
          setContent={setContent}
          addUserInput={addUserInput} // Pass the callback function to the UserInput component
        /> */}
        <button>Submit Post</button>
      </form>
    </>
  );
};

export default BlogPost;

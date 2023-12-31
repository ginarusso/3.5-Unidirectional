import React, { useState } from 'react'
import BlogPost from './BlogPost'
import UserInput from './UserInput'

const Blog = () => {

    // setting author, title, content in the blog

    let [author, setAuthor] = useState('');
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    
    let [listOfPosts, setListOfPosts] = useState([])

    function addToList(newPost){  // create a function to take the blog posts created from BlogPost.jsx and add them to the list of blog posts to the Blog component - send down the function to BlogPost.jsx - takes this info and adds the new blog post to listOfPosts -  sets the list of posts and creates a new post and puts it into the list of posts
        setListOfPosts(previousPosts => {
            return [newPost, ...previousPosts]  // order matters....this places most recent post at the top
        })
    }

  return (
    <>
    {
    /* 
    #################################################################################################################################################################################### HOMEWORK ####################################################################################################################################################################
    
    TODO  Create a UserInput Component that will take the information from the input of the user and pass it onto the BlogPost Component
    
    The BlogPost Component should NOT have inputs in it. It should only have a submit button, and after pressing the button, it should create a post and add it to the listOfPosts in the Blog Component.

    Optional TODO: Delete the last post from the listOfPosts
    Optional TODO: Add dates to the posts
    */}
{/* send the title, author, content, etc. down to the UserInput */}
    <UserInput
          title={title}
          author={author}
          content={content}
          setAuthor={setAuthor}
          setTitle={setTitle}
          setContent={setContent}
        />

        {/* after state is set from the values from UserInput, take the title, author, content and sending it to BlogPost.jsx to create the post */}
    <BlogPost addToList={addToList}
          title={title}
          author={author}
          content={content}
          setAuthor={setAuthor}
          setTitle={setTitle}
          setContent={setContent}/>   

    {listOfPosts.map(post =>{
        return (
            <>
            {/* 4) Display the post's title, author, and content */}
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
            <p>{post.content}</p>
            <hr />
            </>
        )
    })}
    </>
  )
}

export default Blog
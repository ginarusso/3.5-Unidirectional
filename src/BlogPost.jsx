import React, {useState} from 'react'
import UserInput from './UserInput'

// 12) Add a prop to the BlogPost component and name it addToList

const BlogPost = ({addToList}) => {

//    6) Create the useStates for the user inputs, which will create the blog
    let [author, setAuthor] = useState('') //place empty string so not undefined
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    // let [post, setPost] = useState('') don't need it to re-render

// update handleSubmit
// 9) The handleSubmit function creates a post and saves the post wherever you'd like. 
// Previously, looked like this:
// function handleSubmit(e) {
//     e.preventDefault()
//     SVGTextPositioningElement({author, title, content})
// }
// This function would create a post for you. GO TO Blog.jsx


// 13) Edit the handleSubmit function so that it creates a post and adds that post to the listOfPosts we had from the Blog component. It does this by using the callback function we received as a prop.
    function handleSubmit(e){
        e.preventDefault() //prevents page from refreshing and clearing input
        // setPost({
        //     author, title, content
        // })
        let post = {author, title, content}  //shortcut for {author: author, title: title, content: content}
        addToList(post)
        
        setAuthor('') //clears input values
        setContent('')
        setTitle('')

    }

  return (
    <>
    {/* 7) Create the form which has gets the inputs from the UserInput component and sends those inputs to the useState variables above. Initially, the form did not have onSubmit  
    8) Create the onSubmit which will be function that creates the post
    
    */ }
    <form onSubmit={handleSubmit}>
        <UserInput title={title} author={author} content={content} setAuthor={setAuthor} setTitle={setTitle} setContent={setContent}/>
        <button>Submit Post</button>
    </form>
    
    </>
  )
}

export default BlogPost
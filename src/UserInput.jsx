import React from 'react'

const UserInput = ( {title, setTitle, author, setAuthor, content, setContent} ) => {

  return (
    <>
            <label>Title: </label>
            <input
            type="text"
            value={title} //ties value to clear the input
            onChange={e => { setTitle(e.target.value) }}
            required
            />
            <br />
            <label>Author: </label>
             <input
             type="text"
             value={author} //ties value to clear the input
             onChange={e => { setAuthor(e.target.value) }}
             required
            />
            <br />
            <label>Post: </label>
             <input type="text"
             value={content} //ties value to clear the input
             onChange={e => { setContent(e.target.value) }}
             required
            />

    </>
  )
}

export default UserInput
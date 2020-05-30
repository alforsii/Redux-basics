import React, {useState} from 'react'

export default function AddPostForm({ addPost }) {
    const [post,setPost] = useState({
        title: '',
        body: ''
    })
    const handleChange = e => {
        setPost({...post, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addPost(post)
        setPost({ title: '', body: ''})
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="title" value={post.title} placeholder='Enter title'/>
                <input onChange={handleChange} type="text" name="body" value={post.body} placeholder=" Enter body"/>
                <button type="submit">Add post</button>
            </form>   
        </React.Fragment>
    )
}

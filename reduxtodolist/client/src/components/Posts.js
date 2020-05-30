import React from 'react'
import UpdatePost from './UpdatePost'
import './Posts.css'

export default function Posts({ posts, deletePost, updatePost }) {
    return (
        <div>
             {posts.map(post => {
              return (
                <React.Fragment key={post._id}>
                    <div className="post">
                        <span> ID: {post._id} </span>
                        <h4> Title: {post.title} </h4>
                        <p> Body: {post.body} </p>
                        <button style={{color: 'red'}} onClick={() => deletePost(post._id)}>DELETE</button>
                        <UpdatePost post={post} updatePost={updatePost} />
                        {/* <button style={{color: 'green'}} onClick={() => updatePost(post._id)}>UPDATE</button> */}
                    </div>
                    <hr/>
                </React.Fragment>
              )
            })}
        </div>
    )
}

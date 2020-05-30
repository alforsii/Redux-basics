import React from 'react'
import './Posts.css'
export default function Posts({ posts, deletePost }) {
    return (
        <div>
             {posts.map(post => {
              return (
                <React.Fragment key={post.id || post._id}>
                    <div className="post">
                        <span> ID: {post.id} </span>
                        <h4> Title: {post.title} </h4>
                        <p> Body: {post.body} </p>
                        <button style={{color: 'red'}} onClick={() => deletePost(post.id)}>DELETE</button>
                    </div>
                    <hr/>
                </React.Fragment>
              )
            })}
        </div>
    )
}

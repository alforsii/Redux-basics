import React from 'react'
import './Posts.css'
export default function Posts({ posts }) {
    return (
        <div>
             {posts.map(post => {
              return (
                <React.Fragment key={post.id || post._id}>
                    <div className="post">
                        <h4> {post.title} </h4>
                        <p> {post.body} </p>
                    </div>
                    <hr/>
                </React.Fragment>
              )
            })}
        </div>
    )
}

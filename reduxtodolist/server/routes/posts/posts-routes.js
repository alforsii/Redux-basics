const express = require('express')
const router = express.Router()
const Post = require('../../models/Post.model')

router.get('/posts', (req, res) => {
    Post.find()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => res.json({message: err.message}))
})


router.post('/post/new', (req, res) => {

    Post.create(req.body)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err => res.json({message: err.message}))
})


router.patch('/post/:postId/update', (req, res) => {

    Post.findByIdAndUpdate(req.params.postId, req.body, { new: true })
    .then(updatedPost => {
        res.status(200).json(updatedPost)
    })
    .catch(err => res.json({message: err.message}))
})


router.delete('/post/:postId/delete', (req, res) => {

    console.log("Output for: req.params.postId", req.params.postId)
    Post.findByIdAndRemove(req.params.postId)
    .then(removedPost => {
        res.status(200).json({message: 'Successfully removed', post: removedPost})
    })
    .catch(err => res.json({message: err.message}))
})

module.exports = router
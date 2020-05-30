const { Schema, model } = require('mongoose')

const postsSchema = new Schema({
    title: String,
    body: String
}, {
    timestamps: true
})

module.exports = model('Post', postsSchema)
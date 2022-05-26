const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    name: String,
    text: String,
    newId: {
        ref: 'New',
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
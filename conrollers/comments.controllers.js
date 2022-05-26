const Comment = require('../models/Comment.model')

module.exports.controllerComments = {
    postCommentByNew: (req, res) => {
        Comment.create({
           name: req.body.name,
           text: req.body.text,
           newId: req.body.newId
        }).then((data) => {
            res.json(data)
        })
    },
    deleteComment: (req,res) => {
        Comment.findByIdAndRemove(req.params.id).then(() => {
            res.json('Коммент удален')
        })
    }, 
    showComment: (req, res) => {
        Comment.find({newId: req.params.id}).then((data) => {
            res.json(data)
        })
    }
}
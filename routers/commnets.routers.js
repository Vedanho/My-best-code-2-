const { Router } = require('express')

const router = Router()

const { controllerComments } = require('../conrollers/comments.controllers')

router.post('/comment', controllerComments.postCommentByNew)
router.delete('/comment/:id', controllerComments.deleteComment)
router.get('/comment/:id', controllerComments.showComment)

module.exports = router
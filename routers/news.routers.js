const { Router } = require('express')

const router = Router()

const { contollerNew } = require('../conrollers/news.controllers')

router.post('/new', contollerNew.postNew )
router.delete('/new/:id', contollerNew.deleteNew)
router.patch('/new/:id', contollerNew.patchNew)
router.get('/new/:id', contollerNew.getNewById)
router.get('/new', contollerNew.getNews)
router.get('/new/categorie/:id',contollerNew.getNewsByCategorie)

module.exports = router 

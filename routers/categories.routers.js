const { Router } = require('express')

const router = Router()

const { categorieController }= require('../conrollers/categories.controllers')

router.post('/categorie', categorieController.createCategorie)
router.delete('/categorie/:id', categorieController.deleteCategorie)
router.get('/categorie',categorieController.getCategorie)

module.exports = router

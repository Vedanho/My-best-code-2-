const Categorie = require('../models/Categorie.model')

module.exports.categorieController = {
    createCategorie: (req, res) => {
        Categorie.create( {
            name: req.body.name
        }).then ((data) => {
            res.json(data)
        })
    }, 
    deleteCategorie: (req, res) => {
        Categorie.findByIdAndRemove(req.params.id).then(() => {
            res.json('Категория удалена')
        })
    }, 
    getCategorie: (req, res) => {
        Categorie.find().then ((data) => {
            res.json(data)
        })
    }
}
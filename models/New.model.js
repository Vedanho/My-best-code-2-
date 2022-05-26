const mongoose = require('mongoose')

const newSchema = mongoose.Schema({
    head: String,
    text: String,
    categorieId: {
        ref: 'Categorie',
        type: mongoose.SchemaTypes.ObjectId
    }
})

const New = mongoose.model('New', newSchema)

module.exports = New
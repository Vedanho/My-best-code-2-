const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port = 4000

app.use(express.json())
app.use(require('./routers/categories.routers'))
app.use(require('./routers/commnets.routers'))
app.use(require('./routers/news.routers'))

mongoose.connect('mongodb+srv://Amir:intocode@cluster0.gzzxb.mongodb.net/news?retryWrites=true&w=majority', {
      useNewUrlParser:true,
      useUnifiedTopology:true,
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединии с сервером MongoDB'))

app.listen(port, () => {
    console.log('Server is working')
})
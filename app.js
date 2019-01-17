const morgan = require('morgan')
const express = require('express')
const layout = require('./views/layout');

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
    console.log('Hello world')

    res.send(layout(''));
})

app.listen(3000, () => console.log("listening on port 3000"));
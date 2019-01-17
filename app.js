const morgan = require('morgan')
const express = require('express')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'))

app.get('/', (res, req, next) => {
    const reqBody = express.urlencoded(req.body)
    console.log('Hello world')

})

app.listen(3000, () => console.log("listening on port 3000"))

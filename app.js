const morgan = require('morgan')
const express = require('express')
const layout = require('./views/layout');
const { db } = require('./models')
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')
//test

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'))

app.use('/wiki', wikiRouter)

app.get('/', (req, res, next) => {
    console.log('Hello world')

    res.send(layout(''));
})

const init = async () => {
    await db.sync();

    app.listen(3000, () => console.log(`listening on port 3000`));
}

init();

const express = require("express")
const router = express.Router()
const main = require("../views/main")
const Page = require("../models/index")

router.get('/', async (req, res, next) => {
    // const allPages = await(Page.findAll()) 
    // res.send(main(allPages))
    res.send("got to GET /wiki/")
}) 

router.post('/', (req, res, next) => {
    res.send('got to POST /wiki/')
})

router.get('/add', (req, res, next) => {
    res.send('got to GET /wiki/add')
})

module.exports = router
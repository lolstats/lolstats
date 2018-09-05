const router = require('express').Router()
const jsonParser = require('body-parser').json()
// const utils = require('../utils')

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

router.get('/', jsonParser, (req, res) => {
    console.log('summoner')
    res.send()
})

module.exports = router

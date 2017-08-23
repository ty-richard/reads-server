const express = require('express')

const router = express.Router()

const queries = require('../db/queries')

router.get('/', (req, res) => {
    queries
        .books
        .getAll()
        .then(books => {
            res.json(books)
        })
})

router.get('/:id', (req, res) => {
    queries
        .books
        .getOne(req.params.id)
        .then(books => {
            res.json(books)
        })
})

router.post('/', (req, res, next) => {
    queries
        .create(req.body)
        .then(books => {
            res.json(books[0])
        })

})


module.exports = router
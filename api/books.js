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
        .books
        .create(req.body)
        .then(books => {
            res.json(books[0])
        })

})

router.put('/:id', (req, res, next) => {
    queries
        .books
        .update(req.params.id, req.body)
        .then(books => {
            res.json(books[0])
        })
})

router.delete('/:id', (req, res) => {
    queries
        .books
        .delete(req.params.id)
        .then(() => {
            res.json({
                deleted: true
            })
        })
})

module.exports = router
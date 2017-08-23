const express = require('express')

const router = express.Router()

const queries = require('../db/queries')


router.get('/', (req, res) => {
    queries
        .authors
        .getAll()
        .then(authors => {
            res.json(authors)
        })
})

router.get('/:id', (req, res) => {
    queries
        .authors
        .getOne(req.params.id)
        .then(authors => {
            res.json(authors)
        })
})

router.post('/', (req, res, next) => {
    queries
        .authors
        .create(req.body)
        .then(authors => {
            res.json(authors[0])
        })

})

router.put('/:id', (req, res, next) => {
    queries
        .authors
        .update(req.params.id, req.body)
        .then(authors => {
            res.json(authors[0])
        })
})

router.delete('/:id', (req, res) => {
    queries
        .authors
        .delete(req.params.id)
        .then(() => {
            res.json({
                deleted: true
            })
        })
})



module.exports = router
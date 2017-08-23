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
        .create(req.body)
        .then(authors => {
            res.json(authors[0])
        })

})



module.exports = router
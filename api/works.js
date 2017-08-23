const express = require('express')

const router = express.Router()

const queries = require('../db/queries')

router.get('/', (req, res) => {
    queries
        .works
        .getAll()
        .then(works => {
            res.json(works)
        })
})

router.get('/:id', (req, res) => {
    queries
        .works
        .getOne(req.params.id)
        .then(works => {
            res.json(works)
        })
})

router.post('/', (req, res, next) => {
    queries
        .works
        .create(req.body)
        .then(works => {
            res.json(works[0])
        })

})



module.exports = router
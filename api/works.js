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

router.put('/:id', (req, res, next) => {
    queries
        .works
        .update(req.params.id, req.body)
        .then(works => {
            res.json(works[0])
        })
})

router.delete('/:id', (req, res) => {
    queries
        .works
        .delete(req.params.id)
        .then(() => {
            res.json({
                deleted: true
            })
        })
})



module.exports = router
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const authors = require('./api/authors')
const books = require('./api/books')
const works = require('./api/works')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/authors', authors)

app.use('/api/books', books)

app.use('/api/works', works)

//404 message
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

//error handler

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    })
})

app.listen(process.env.PORT || 5050)
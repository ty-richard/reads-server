const knex = require('./knex')

module.exports = {
    authors: {
        getAll: function() {
            return knex('authors')
        },
        getOne: function(id) {
            return knex('authors')
                .where('id', id)
        },
        create: function(authors) {
            return knex('authors')
                .insert(authors, '*')
        }
    },
    books: {
        getAll: function() {
            return knex('books')
        },
        getOne: function(id) {
            return knex('books')
                .where('id', id)
        },
        create: function(books) {
            return knex('books')
                .insert(books, '*')
        }
    },
    works: {
        getAll: function() {
            return knex('works')
        },
        getOne: function(id) {
            return knex('works')
                .where('id', id)
        },
        create: function(works) {
            return knex('works')
                .insert(works, '*')
        }
    }
}
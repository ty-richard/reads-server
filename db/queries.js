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
        },
        update: function(id, authors) {
            return knex('authors')
                .where('id', id)
                .update(authors, '*')
        },
        delete: function(id) {
            return knex('authors')
                .where('id', id)
                .del()
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
        },
        update: function(id, books) {
            return knex('books')
                .where('id', id)
                .update(books, '*')
        },
        delete: function(id) {
            return knex('books')
                .where('id', id)
                .del()
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
        },
        update: function(id, works) {
            return knex('works')
                .where('id', id)
                .update(works, '*')
        },
        delete: function(id) {
            return knex('works')
                .where('id', id)
                .del()
        }
    }
}
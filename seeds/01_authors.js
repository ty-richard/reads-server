const authors = require("../authors");

exports.seed = function(knex, Promise) {
    return knex.raw("TRUNCATE authors RESTART IDENTITY CASCADE")
        .then(function() {
            return knex("authors").insert(authors);
        });
};
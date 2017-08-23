const works = require("../data/works");

exports.seed = function(knex, Promise) {
    return knex.raw("TRUNCATE works RESTART IDENTITY CASCADE")
        .then(function() {
            return knex("works").insert(works);
        });
};
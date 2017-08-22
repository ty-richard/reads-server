exports.up = function(knex, Promise) {
    return knex.schema.createTable("works", (table) => {
        table.increments();
        table.integer("authors_id").references("authors.id");
        table.integer("books_id").references("books.id");
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("works");
};
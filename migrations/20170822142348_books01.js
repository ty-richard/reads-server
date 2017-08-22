exports.up = function(knex, Promise) {
    return knex.schema.createTable("books", (table) => {
        table.increments();
        table.text("title");
        table.text("genre");
        table.text("description");
        table.text("url");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("books");
};
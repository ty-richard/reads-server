exports.up = function(knex, Promise) {
    return knex.schema.createTable("authors", (table) => {
        table.increments();
        table.text("name");
        table.text("bio");
        table.text("url");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("authors");
};
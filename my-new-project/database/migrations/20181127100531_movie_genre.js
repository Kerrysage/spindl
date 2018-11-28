
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movie_genre', function (table) {
        table.increments()
        table.string('genre')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movie_genre')
};

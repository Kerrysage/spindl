
exports.up = function(knex, Promise) {
    knex.schema.createTable('night_life', function (table) {
        table.increments()
        table.string('activity')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('night_life')
};

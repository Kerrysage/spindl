
exports.up = function(knex, Promise) {
    knex.schema.createTable('indoor', function (table) {
        table.increments()
        table.string('activity')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('indoor')
};


exports.up = function(knex, Promise) {
    knex.schema.createTable('outdoors', function (table) {
        table.increments()
        table.string('activity')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('outdoors')
};

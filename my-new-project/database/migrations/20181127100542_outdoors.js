
exports.up = function(knex, Promise) {
    return knex.schema.createTable('outdoor', function (table) {
        table.increments()
        table.string('activity')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('outdoor')
};

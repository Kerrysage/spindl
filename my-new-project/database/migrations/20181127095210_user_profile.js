
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_profile', function (table) {
        table.increments()
        table.string('name')
        table.string('gender')
        table.integer('age')
        table.string('location')
        table.string('picture', 250)
        table.string('password')
        table.string('username')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_profile')
};

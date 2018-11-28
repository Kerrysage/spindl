
exports.up = function(knex, Promise) {
    return knex.schema.createTable('match', function (table) {
        table.increments()
        table.integer('user_profile_1').references('user_profile.id').unsigned().onDelete('cascade')
        table.integer('user_profile_2').references('user_profile.id').unsigned().onDelete('cascade')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('match')
};

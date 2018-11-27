
exports.up = function(knex, Promise) {
    knex.schema.createTable('user_choices', function (table) {
        table.increments()
        table.string('name')
        table.string('gender_pref')
        table.string('gender')
        table.integer('age')
        table.string('location')
        table.string('picture', 250)
        table.string('password')
        table.string('username')
        table.integer('choices').references('force.id').unsigned().onDelete('cascade')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_choices')
};

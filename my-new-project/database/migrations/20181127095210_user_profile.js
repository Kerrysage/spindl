
exports.up = function(knex, Promise) {
    knex.schema.createTable('user_profile', function (table) {
        table.increments()
        table.string('name')
        table.string('gender')
        table.integer('age')
        table.string('location')
        table.string('picture', 250)
        table.string('password')
        table.string('username')
        table.integer('movie_choices').references('movie_genre.id').unsigned().onDelete('cascade')
        table.integer('food_choices').references('food.id').unsigned().onDelete('cascade')
        table.integer('indoor_choices').references('indoor.id').unsigned().onDelete('cascade')
        table.integer('outdoor_choices').references('outdoor.id').unsigned().onDelete('cascade')
        table.integer('night_life_choices').references('night_life.id').unsigned().onDelete('cascade')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_profile')
};

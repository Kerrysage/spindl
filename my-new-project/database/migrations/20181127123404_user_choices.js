
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_choices', function (table) {
        table.increments()
        table.integer('user_id').references('user_profile.id').unsigned().onDelete('cascade')
        table.integer('movie_choices1').references('movie_genre.id').unsigned().onDelete('cascade')
        table.integer('movie_choices2').references('movie_genre.id').unsigned().onDelete('cascade')
        table.integer('movie_choices3').references('movie_genre.id').unsigned().onDelete('cascade')
        table.integer('food_choices1').references('food.id').unsigned().onDelete('cascade')
        table.integer('food_choices2').references('food.id').unsigned().onDelete('cascade')
        table.integer('food_choices3').references('food.id').unsigned().onDelete('cascade')
        table.integer('indoor_choices1').references('indoor.id').unsigned().onDelete('cascade')
        table.integer('indoor_choices2').references('indoor.id').unsigned().onDelete('cascade')
        table.integer('indoor_choices3').references('indoor.id').unsigned().onDelete('cascade')
        table.integer('outdoor_choices1').references('outdoor.id').unsigned().onDelete('cascade')
        table.integer('outdoor_choices2').references('outdoor.id').unsigned().onDelete('cascade')
        table.integer('outdoor_choices3').references('outdoor.id').unsigned().onDelete('cascade')
        table.integer('night_life_choices1').references('night_life.id').unsigned().onDelete('cascade')
        table.integer('night_life_choices2').references('night_life.id').unsigned().onDelete('cascade')
        table.integer('night_life_choices3').references('night_life.id').unsigned().onDelete('cascade')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_choices')
};

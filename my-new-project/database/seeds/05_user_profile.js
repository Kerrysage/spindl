
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user_profile"; ALTER SEQUENCE user_profile_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('user_profile').insert([
        {id: 1, name: 'Dan', gender: 'M', age: 22, location: 'Galvanize', picture: 'https://picsum.photos/200/300/?random', password: '', username: '', movie_choices: 0, food_choices: 0, indoor_choices: 0, outdoor_choices: 0, night_life: 0,},
        {id: 2, name: 'Victor', gender: 'M', age: 26, location: 'Galvanize', picture: 'https://picsum.photos/200/300/?random', password: '', username: '', movie_choices: 0, food_choices: 0, indoor_choices: 0, outdoor_choices: 0, night_life: 0,},
        {id: 3, name: 'Kerry', gender: 'F', age: 22, location: 'Miami', picture: 'https://picsum.photos/200/300/?random', password: '', username: '', movie_choices: 0, food_choices: 0, indoor_choices: 0, outdoor_choices: 0, night_life: 0,},
      ]);
    });
};

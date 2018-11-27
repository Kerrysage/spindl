
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "movie_genre"; ALTER SEQUENCE movie_genre_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      return knex('movie_genre').insert([
        {id: 1, genre: 'Horror'},
        {id: 2, genre: 'Comedy'},
        {id: 3, genre: 'Sci-fi'},
        {id: 4, genre: 'Romantic-Comedy'},
        {id: 5, genre: 'Action'},
        {id: 6, genre: 'Romantic'},
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user_profile"; ALTER SEQUENCE user_profile_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('user_profile').insert([
        {id: 1, name: 'Dan', gender: 'M', age: 22, location: 'Galvanize', picture: 'https://picsum.photos/200/300/?random', password: '$2a$12$0V.8JTVgPNQWHPauL83k6OPweSI8s51lWy6lcVreTY7b2MLlKU30W', username: '', email: 'daniel.phonelath@gmail.com'},
        {id: 2, name: 'Victor', gender: 'M', age: 26, location: 'Galvanize', picture: 'https://picsum.photos/200/300/?random', password: '$2a$12$JmnT/6tb4kyBoWw07d3INOBC2NRQlJbG4.shhkbfZDQdyrhDPRtHG', username: '', email: 'montoya.victor7@gmail.com'},
        {id: 3, name: 'Kerry', gender: 'F', age: 22, location: 'Miami', picture: 'https://picsum.photos/200/300/?random', password: '$2a$12$uKeFU/wtMBcjdA/lHZTAAeVK9ZeRj4J93KSpMv4JWydeHet5GA.QW', username: '', email: 'kerrysage89@gmail.com'},
      ]);
    });
};

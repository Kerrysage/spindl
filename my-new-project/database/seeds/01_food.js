
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "food"; ALTER SEQUENCE food_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {id: 1, type: 'Mexican'},
        {id: 2, type: 'Asian'},
        {id: 3, type: 'American'},
        {id: 4, type: 'Italian'},
        {id: 5, type: 'Indian'},
        {id: 6, type: 'Seafood'},
      ]);
    });
};

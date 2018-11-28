
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "indoor"; ALTER SEQUENCE indoor_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      return knex('indoor').insert([
        {id: 1, activity: 'Netflix'},
        {id: 2, activity: 'Board Games'},
        {id: 3, activity: 'Drinking Games'},
        {id: 4, activity: 'Cooking'},
        {id: 5, activity: 'Couples Coding'},
      ]);
    });
};

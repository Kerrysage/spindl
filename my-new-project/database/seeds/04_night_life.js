
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "night_life"; ALTER SEQUENCE night_life_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      return knex('night_life').insert([
        {id: 1, activity: 'Roof-Top Bar'},
        {id: 2, activity: 'Night Club'},
        {id: 3, activity: 'Jazz Club'},
        {id: 4, activity: 'Live Music'},
        {id: 5, activity: 'Speakeasy'},
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "outdoor"; ALTER SEQUENCE outdoor_id_seq RESTART WITH 11;')
    .then(function () {
      // Inserts seed entries
      return knex('outdoor').insert([
        {id: 1, activity: 'Hiking'},
        {id: 2, activity: 'Bowling'},
        {id: 3, activity: 'Swimming'},
        {id: 4, activity: 'Mini Golf'},
        {id: 5, activity: 'Rock Climbing'},
        {id: 6, activity: 'Picnic'},
        {id: 7, activity: 'Riding Bikes/Scooter'},
        {id: 8, activity: 'Ski/Snowboarding'},
        {id: 9, activity: 'Museum'},
        {id: 10, activity: 'Dancing'},
      ]);
    });
};

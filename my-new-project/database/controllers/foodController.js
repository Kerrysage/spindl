const knex = require('../db/connection')

const getALL = (req, res, next) => {
    return knex('food')
    .orderBy('id', 'asc')
    .then(food => res.json({food: food}))
}


module.exports = {getALL}
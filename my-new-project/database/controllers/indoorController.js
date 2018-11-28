const knex = require('../db/connection')

const getALL = (req, res, next) => {
    return knex('indoor')
    .orderBy('id', 'asc')
    .then(activity => res.json({activity}))
}


module.exports = {getALL}
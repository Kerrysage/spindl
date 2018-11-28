const knex = require('../db/connection')

const getALL = (req, res, next) => {
    return knex('movie_genre')
    .orderBy('id', 'asc')
    .then(genre => res.json({genre}))
}


module.exports = {getALL}
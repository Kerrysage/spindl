const knex = require('../db/connection')

const getALL = (req, res, next) => {
    return knex('user_profile')
    .orderBy('id', 'asc')
    .then(users => res.json({users}))
}

const getOne = (req, res, next) => {
    let id = req.params.id
    if(!Number(id)){
        res.json({error: 'Please enter a valid id number'})
    } else {
        return knex('user_profile')
            .select('*')
            .where({id: id})
            .then(user => {
                if(!user.length){
                    return res.json({error: 'That user doesn\'t exist yet'})
                } else {
                    return res.json({user})
                }
            })
            .catch(err => console.log('ERROR: ', err))
    }
}

const postUser = (req, res, next) => {
    const body = req.body
    return knex('user_profile')
        .insert(body)
        .returning('*')
        .then(user => {
            if(user.length === 1){
                return res.json({user: user[0]})
            } else {
                return res.json({user: user})
            }
        })
        .catch(err => console.log('ERROR: ', err))
}

const putUser = (req, res, next) => {
    const body = req.body
    const id = req.params.id
    return knex('user_profile')
        .where('id', id)
        .update(body)
        .returning('*')
        .then(eddited => res.json({eddited: eddited[0]}))
        .catch(err => console.log('ERROR: ', err))
}

const deleteUser = (req, res, next) => {
    const id = req.params.id
    return knex('user_profile')
        .where('id', id)
        .delete()
        .returning('*')
        .then(deleted => res.json({deleted: deleted[0]}))
        .catch(err => console.log('ERROR:', err))
}


module.exports = {
    getALL,
    getOne,
    postUser,
    putUser,
    deleteUser, 
}
const knex = require('../db/connection')

const getALL = (req, res, next) => {
    return knex('user_choices')
    .orderBy('id', 'asc')
    .then(choices => {
        if(!choices.length){
            return res.json({error: 'We are having technical difficulties'})
        }
        return res.json({choices: choices})
    })


}


const getOne = (req, res, next) => {
    const id = req.params.id
    if(!Number(id)){
        res.json({error: 'Please enter a valid id number'})
    } else {
        return knex('user_choices')
        .select('*')
        .where({id: id})
        .then(choices => {
            if(!choices.length){
                return res.json({error: "This choice doesn't exist"})
            } else {
                return res.json({choices: choices})
            }
        })
    }
}


const postChoice = (req, res, next) => {
        return knex('user_choices')
        .insert(req.body)
        .returning('*')
        .then(choices => {
            if(!choices.length){
                return res.json({error: "This choice doesn't exist"})
            } else {
                return res.json({choices: choices})
            }
        })
    }







module.exports = {
    getALL,
    getOne,
    postChoice
}
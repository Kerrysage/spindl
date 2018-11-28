const knex = require('../db/connection')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const saltRounds = 12

const newUser = (req, res, next) => {
    const email = req.body.email
    return knex('user_profile')
        .where('email', email)
        .then(user => {
            if(!user.length){
        console.log('yo')
                const hashPassword = bcrypt.hashSync(req.body.password, saltRounds)
                req.body.password =  hashPassword
                return knex('user_profile')
                    .insert(req.body)
                    .returning('*')
                    .then(newUser => {
                        const payload = JSON.parse(JSON.stringify(newUser[0]))
                        delete payload.password
                        const token = jwt.sign(payload, process.env.TOKEN_SECRET)
                        res.json({token})
                    })
                    .catch(err => console.log('Error:', err))
            } else {
                res.json({error: 'Error: email already registered. Please enter a different email and try again'})
            }
        })
}

const returningUser = (req, res, next) => {
        const email = req.body.email
        return knex('user_profile')
            .where('email', email)
            .then(user => {
                if(!user.length){
                res.json({error: 'Email not found, please enter a registered email.'})
                } else {
                    const hashPassword = user[0].password
                    const match = bcrypt.compareSync(req.body.password, hashPassword)
                    if(match){
                        //generate session token
                        console.log('signin')
                        const payload = JSON.parse(JSON.stringify(user[0]))
                        delete payload.password
                        const token = jwt.sign(payload, process.env.TOKEN_SECRET)
                        res.json({ token: token })
                    } else { 
                        res.json({error: 'Incorrect password, please try again'})
                    }
                }
            })
            .catch(err => console.log('error', err))
        }
    

module.exports = {
    newUser,
    returningUser
}
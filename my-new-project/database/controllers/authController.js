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
        console.log('yo, bout to hash your password')
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
                    .catch(err => {
                        console.log('Error:', err)
                        return res.status(404).json({error: err})
                    })
            } else {
                res.status(302).json({error: 'Error: email already registered. Please enter a different email and try again'})
            }
        })
}

const returningUser = (req, res, next) => {
        const email = req.body.email
        return knex('user_profile')
            .where('email', email)
            .then(user => {
                if(!user.length){
                res.status(404).json({error: "Please enter a valid email and try again."})
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
                        res.status(404).json({error: 'Incorrect password, please try again'})
                    }
                }
            })
            .catch(err => console.log('This is catch error', err))
        }
    

module.exports = {
    newUser,
    returningUser
}
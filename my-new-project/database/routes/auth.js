const express = require('express')
const router = express.Router()
// const controller = require('../controllers/foodController')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const saltRounds = 12


router.post('/', function(req, res, next){
    const email = req.body.email
    knex('user_profile')
        .where('email', email)
        .then(user => {
            if(!user.length){
                const hashPassword = bcrypt.hashSync(req.body.password, saltRounds)
                req.body.password = hashPassword
                knex('user_profile')
                    .insert(req.body)
                    .returning('*')
                    .then(newUser => {
                        const payload = JSON.parse(JSON.stringify(newUser[0]))
                        delete payload.password
                        const token = jwt.sign(payload, process.env.TOKEN_SECRET)
                        res.json({token})
                    })
            } else {
                res.json({error: 'Error: email already registered. Please enter a different email and try again'})
            }
        })
})

// router.post('/login', function(req, res, next) {
//     const email = req.body.email
//     knex('user_profile')
//         .where('email', email)
//         .then(user => {
//             if(!user.length){
//             res.json({error: 'Email not found, please enter a registered email.'})
//             } else {
//                 const hashPassword = user[0].password
//                 const match = bcrypt.compareSync(req.body.password, hashPassword)
//                 if(match){
//                     //generate sesson token
//                     const payload = JSON.parse(JSON.stringify(user[0]))
//                     delete payload.password
//                     const token = jwt.sign(payload, process.env.TOKEN_SECRET)
//                     res.json({ token: token })
//                 } else { 
//                     res.json({error: 'Incorrect password, please try again'})
//                 }
//             }
//         })
// });

module.exports = router
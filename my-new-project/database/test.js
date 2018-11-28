const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const saltRounds = 12


const danPassword = bcrypt.hashSync('Dan', saltRounds)
const kerryPassword = bcrypt.hashSync('Kerry', saltRounds)
const victorPassword = bcrypt.hashSync('Victor', saltRounds)

console.log('dan:', danPassword, 'kerry:', kerryPassword, 'victor:', victorPassword)

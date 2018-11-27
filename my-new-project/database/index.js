const express = require('express')
const app =  express()
let port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    res.json({message: "RRRAAAWRRRR"})
})

















app.listen(port, () => console.log(`I got you on ${port}`))
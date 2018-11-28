const express = require('express')
const app =  express()
let port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const foodRoutes = require('./routes/foodRoutes')
const movieRoutes = require('./routes/movieRoutes')
const indoorRoutes = require('./routes/indoorRoutes')
const outdoorRoutes = require('./routes/outdoorRoutes')
const nightlifeRoutes = require('./routes/nightlifeRoutes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => {
    res.json({message: "RRRAAAWRRRR", food: `http://localhost:${port}/food`})
})

app.use('/food', foodRoutes)
app.use('/movie', movieRoutes)
app.use('/indoor', indoorRoutes)
app.use('/outdoor', outdoorRoutes)
app.use('/nightlife', nightlifeRoutes)














app.use(notFound);
app.use(errorHandler);

function notFound(err, req, res, next) {
    res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
    console.error('NOPE, LOL', err)
    const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({error: err.message, stack, url: req.originalUrl})
}


app.listen(port, () => console.log(`I got you on https://localhost:${port}`))
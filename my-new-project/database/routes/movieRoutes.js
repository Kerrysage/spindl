const express = require('express')
const router = express.Router()
const controller = require('../controllers/movieController')


router.get('/', controller.getALL)



module.exports = router
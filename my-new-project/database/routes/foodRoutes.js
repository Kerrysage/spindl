const express = require('express')
const router = express.Router()
const controller = require('../controllers/foodController')


router.get('/', controller.getALL)



module.exports = router
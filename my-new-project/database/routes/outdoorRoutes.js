const express = require('express')
const router = express.Router()
const controller = require('../controllers/outdoorController')


router.get('/', controller.getALL)



module.exports = router
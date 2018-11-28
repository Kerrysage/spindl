const express = require('express')
const router = express.Router()
const controller = require('../controllers/userChoicesController')


router.get('/', controller.getALL)
router.get('/:id', controller.getOne)
// router.post('/', controller.postChoice)
// router.put('/:id', controller.editChoices)


module.exports = router
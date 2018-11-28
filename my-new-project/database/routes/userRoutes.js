const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')


router.get('/', controller.getALL)
router.get('/:id', controller.getOne)
router.post('/', controller.postUser)
router.put('/:id', controller.putUser)
router.delete('/:id', controller.deleteUser)


module.exports = router
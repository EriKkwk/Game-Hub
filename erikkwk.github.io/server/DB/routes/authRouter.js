const Router = require('express')
const authController = require('../controller/authController')
const router = new Router()
const {check} = require('express-validator')


router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.get('/counts', authController.getCounts)
router.put('/ticTacToe', authController.ticTacToe)
router.put('/squares', authController.squares)
router.put('/rockSpissorsPaperGame', authController.rockSpissorsPaperGame)
router.put('/rocketGame', authController.rocketGame)

module.exports = router;
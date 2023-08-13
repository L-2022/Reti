const Router = require('express')
const router = new Router()
// const deviceController = require('../controllers/deviceController')
const logoController = require('../controllers/logoController')
router.post('/', logoController.create)


router.get('/', logoController.getAll)
router.get('/:id', logoController.getOne)

module.exports = router

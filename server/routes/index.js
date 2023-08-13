const Router = require('express')
const router = new Router()
// const deviceRouter = require('./deviceRouter')
// 
// const brandRouter = require('./brandRouter')
// const typeRouter = require('./typeRouter')
// const basketRouter = require("./basketRouter");
// router.use('/type', typeRouter)
// router.use('/brand', brandRouter)
// router.use('/device', deviceRouter)
// router.use("/basket", basketRouter);
const userRouter = require('./userRouter')
const reviewRouter = require("./reviewRouter");

const logoRouter = require("./logoRouter");

router.use('/logo', logoRouter)

router.use('/user', userRouter)

router.use("/review", reviewRouter);

module.exports = router

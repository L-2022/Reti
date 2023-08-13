const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");


router.get("/getreview/:id", userController.getReview);
router.post("/add/:id", userController.createReview);
router.delete("/dell/:id", userController.dellReview);

module.exports = router;

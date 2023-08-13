const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/logout", userController.logOut);
router.get("/auth", authMiddleware, userController.check);
router.get(
  "/getQuantityDevicesInBasket",
  userController.getQuantityDevicesInBasket
);
router.get("/profile", userController.getUser);

router.post("/addreting/:id", userController.createRetingOne);
router.get("/getreting/:id", userController.getRetingOne);

module.exports = router;

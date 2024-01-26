const router = require("express").Router();
const authController = require("../controllers/authController");
const requireUser = require("../middlewares/requireUser");

router.post("/signup",  authController.signupController);
router.post("/login", authController.loginController);
router.get(
  "/refresh",
  authController.refreshAccessTokenController
);
router.get("/logout", requireUser, authController.logoutController);

module.exports = router;

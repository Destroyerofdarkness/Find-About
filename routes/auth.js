const router = require("express").Router();

const controller = require("../controllers/authControllers.js")

router.get("/login", controller.render_login)

router.get("/register", controller.render_register)

router.post("/login", controller.sign_in)

router.post("/register", controller.sign_up)
module.exports = router
const express = require("express")
const router = express.Router()

const games = require("../models/Games")
const homeController = require("../controllers/homeControllers")

router.get("/", homeController.home_get )

router.get("/register-game", homeController.home_registrer_game)

router.get("/register-game=failure", homeController.home_registrer_game_failure )

router.get("/:id", homeController.home_game_page )

router.post("/register-game", homeController.home_registrer_game_post)

router.post("/:id", homeController.home_game_delete)

module.exports = router
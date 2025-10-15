const express = require("express")
const router = express.Router()
const gameRoute = require("../controllers/gameControllers")

router.get("/register", gameRoute.register_game )

router.post("/register", gameRoute.registrer_game_post)

router.get("/:id", gameRoute.game_get)

router.post("/:id", gameRoute.game_delete)



module.exports = router
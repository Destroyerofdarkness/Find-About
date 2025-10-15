const express = require("express")

const router = express.Router()

const AniController = require("../controllers/animeControllers")

router.get("/register", AniController.register_anime_page )

router.post("/register", AniController.anime_make)


module.exports = router
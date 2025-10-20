const express = require("express")

const router = express.Router()

const AniController = require("../controllers/animeControllers")

router.get("/register", AniController.register_anime_page )

router.post("/register", AniController.anime_make)

router.get("/:id", AniController.anime_page)

router.post("/:id", AniController.anime_page_delete)


module.exports = router
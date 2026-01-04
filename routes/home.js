const express = require("express");
const router = express.Router();

const {authenticate}= require("../middleware/jwtAuth")

const homeController = require("../controllers/homeControllers");

router.get("/home",authenticate ,homeController.home_get );

router.get("/result/:id", authenticate, homeController.find_result)

router.get("/", homeController.home_redirect);



module.exports = router;
const express = require("express");
const router = express.Router();

const {authenticate}= require("../middleware/jwtAuth")

const homeController = require("../controllers/homeControllers");

router.get("/home",authenticate ,homeController.home_get );

router.get("/", homeController.home_redirect);



module.exports = router;
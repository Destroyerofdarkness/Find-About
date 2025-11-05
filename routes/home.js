const express = require("express");
const router = express.Router();


const homeController = require("../controllers/homeControllers");

router.get("/home", homeController.home_get );

router.get("/", homeController.home_redirect);



module.exports = router;
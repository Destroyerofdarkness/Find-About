const games = require("../models/Games")

const home_get = async (req,res) =>{
    const game = await games.find() 
    res.render("index", {name: "Home", game})
}






module.exports = {
    home_get,
}
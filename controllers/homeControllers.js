const games = require("../models/Games")
const animes = require("../models/anime")

const home_get = async (req,res) =>{
    const game = await games.find() 
    const anime = await animes.find()
    res.render("index", {name: "Home", game , anime})
}

const home_redirect = (req,res) =>{
    res.redirect("/home")
}




module.exports = {
    home_get,
    home_redirect
}
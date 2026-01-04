const games = require("../models/Games")
const animes = require("../models/anime")


async function findContent(id){
    const game = await games.findById(id)
    if(game){
        console.log(game)
        return game;
    }
    const anime = await animes.findById(id)
    if(anime){
        return anime
    }
}

module.exports = {findContent}
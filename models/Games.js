

const mongoose = require("mongoose")
const {Schema, model} = mongoose

const gameSchema = new Schema({
    link: String,
    name: String,
    description: String
})

const game = model("games", gameSchema)

module.exports = game
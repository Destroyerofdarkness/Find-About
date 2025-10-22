

const mongoose = require("mongoose")
const {Schema, model} = mongoose

const gameSchema = new Schema({
    link: String,
    name: {type: String,
    unique: true,
    },
    description: String
})

const game = model("games", gameSchema)

module.exports = game
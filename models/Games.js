

const mongoose = require("mongoose")
const {Schema, model} = mongoose

const gameSchema = new Schema({
    link: {
    type: String,
    required: [true, "Enter a link"]
    },
    name: {
    type: String,
    unique: true,
    required: [true, "Enter a name"]
    },
    description: {type: String,
    required: [true, "Enter a description"]
    }
})

const game = model("games", gameSchema)

module.exports = game
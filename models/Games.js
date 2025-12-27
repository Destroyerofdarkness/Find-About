

const mongoose = require("mongoose")
const {Schema, model} = mongoose

const gameSchema = new Schema({
    link: {
    type: String,
    required: [true, "Enter a valid link"]
    },
    name: {
    type: String,
    unique: true,
    required: [true, "Enter a valid name"],
    trim: true
    },
    description: {type: String,
    required: [true, "Enter a valid description"]
    }
})

const game = model("games", gameSchema)

module.exports = game
const mongoose = require("mongoose");
const {Schema, model} = mongoose

const aniSchema = new Schema({
    link: {
    type: String,
    required:[true, "Enter a valid link"],
    },
    Name: {
        type: String,
        required: [true, "Enter a valid name"],
        unique: true,
    },
    Episodes: {
    type: Number,
    required:[true, "Enter a valid number of episodes"],
},
    Description: {type: String,
        required: [true, "Enter a valid description"]
    },
})
const anime = model("animes", aniSchema)

module.exports = anime
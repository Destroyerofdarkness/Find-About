const mongoose = require("mongoose");

const {Schema, model} = mongoose

const aniSchema = new Schema({
    link: String,
    Name: {
        type: String,
        required: [true, "Put in a Name"],
        unique: true,
    },
    Episodes: {
    type: Number,
    required:[true, "Enter a valid number"],
},
    Description: {type: String,
        required: [true, "Enter some description"]
    },
})

const anime = model("animes", aniSchema)

module.exports = anime
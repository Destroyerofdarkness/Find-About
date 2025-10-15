const mongoose = require("mongoose");

const {Schema, model} = mongoose

const aniSchema = new Schema({
    link: URL,
    Name: String,
    Episodes: Number,
    Description: String,
})

const anime = model("animes", aniSchema)

module.exports = anime
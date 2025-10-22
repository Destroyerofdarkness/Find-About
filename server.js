const express = require("express")
const path = require("path")
const ejs = require("ejs")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/", {dbName: "FavoriteGame"})
require("dotenv").config()
const games = require("./models/Games.js")
const app = express();
const home = require("./routes/home.js")

const gameRoute = require("./routes/game.js")

const animeRoute = require("./routes/anime.js")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req,res)=>{
    res.redirect("/home")
})

app.use("/home", home)

app.use("/home/anime", animeRoute)

app.use("/home/game", gameRoute)

app.use((req, res) =>{
    res.status(404).render("404")
})
app.listen(process.env.PORT)
const express = require("express")
const path = require("path")
const ejs = require("ejs")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/", {dbName: "FavoriteGame"})
require("dotenv").config()
const games = require("./models/Games.js")
const app = express();


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get("/", async (req,res) =>{
    const game = await games.find() 
    res.render("index", {name: "Home", game})
})
app.get("/home/:id", async (req,res) =>{
  const id = req.params.id
  const game = await games.findById(id)
  console.log(game)
  res.render("description", {name: game.name, game})
})
app.get("/home", (req, res) =>{
    res.redirect("/")
})
app.get("/home/register-game", (req,res) =>{
    res.render("register", {name: "Register Game"})
})
app.get("/home/register-game=failure", (req,res) =>{
    res.render("registerFail", {name: "Register Game"})
})
app.post("/home/register-game", async (req,res) =>{
  const  {link, name, description} = req.body;
  const foundGame = await games.findById(name)
  if(name === foundGame){
    console.log("Not Able to Register game because the game exists ")
    res.redirect("/home/register-game=failure")
  }else{
    console.log("Fikk app.post")  
  const newGame = new games({
    link: link,
    name: name,
    description: description
  })
  const result =  await newGame.save()
  console.log("data: ", result)
    
  if(result){
    res.redirect("/home")
    console.log("Yes")
  }
  }
})



app.use((req, res) =>{
    res.status(404).render("404")
})
app.listen(process.env.PORT)
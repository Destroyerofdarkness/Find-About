const express = require("express")
const router = express.Router()

const games = require("../models/Games")

router.get("/", async (req,res) =>{
    const game = await games.find() 
    res.render("index", {name: "Home", game})
})

router.get("/", (req, res) =>{
    res.redirect("/")
})
router.get("/register-game", (req,res) =>{
    res.render("register", {name: "Register Game"})
    console.log("test")
})
router.get("/register-game=failure", (req,res) =>{
    res.render("registerFail", {name: "Register Game"})
})
router.get("/:id", async (req,res) =>{
  const id = req.params.id
  const game = await games.findById(id)
  console.log(game)
  res.render("description", {name: game.name, game})
})
router.post("/register-game", async (req,res) =>{
  const  {link, name, description} = req.body;
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
  
})
router.post("/:id", (req,res) =>{
const id = req.params.id;

console.log(req.body, "REQ DELETE")
games.findByIdAndDelete(id)
.then((result) =>{
  console.log("Deleted")
  res.redirect("/home")
})
.catch((err) =>{
  console.log(err)
})
})

module.exports = router
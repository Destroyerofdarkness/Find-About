const games = require("../models/Games")

const home_get = async (req,res) =>{
    const game = await games.find() 
    res.render("index", {name: "Home", game})
}
const home_registrer_game = (req,res) =>{
    res.render("register", {name: "Register Game"})
    console.log("test")
}
const home_registrer_game_failure = (req,res) =>{
    res.render("registerFail", {name: "Register Game"})
}
const home_registrer_game_post = async (req,res) =>{
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
  
}
const home_game_page_get = async (req,res) =>{
  const id = req.params.id
  await games.findById(id)
  .then((result) =>{
    console.log(result)
  res.render("description", {game: result})
  })  
  .catch((err)=>{
    console.log(err)
    res.render("404")
  })
}
const home_game_delete =  (req,res) =>{
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
}



module.exports = {
    home_get,
    home_registrer_game,
    home_registrer_game_failure,
    home_game_page_get,
    home_registrer_game_post,
    home_game_delete
}
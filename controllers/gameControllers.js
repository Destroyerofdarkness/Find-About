const games = require("../models/Games")
//Register game and go to the page
const register_game = (req,res) =>{
    res.render("register", {name: "Register Game"})
    console.log("Loaded in register page")
}

const registrer_game_post = async (req,res) =>{
  const  {link, name, description} = req.body;
  console.log("Fikk app.post")  
  const newGame = new games({
    link: link,
    name: name,
    description: description
  })
  console.log("Game registered")
  const result =  await newGame.save()
  console.log("data: ", result)
    
  if(result){
    res.redirect("/home")
    console.log("User got sent back to homepage")
  }
  
}
// Delete and go to game page
const game_get = async(req,res) =>{
    const id = req.params.id
    await games.findById(id)
  .then((result) =>{
    console.log(result)
  res.render("description", {game: result, name: result.name})
  })  
  .catch((err)=>{
    console.log(err)
    res.render("404")
  })
}

const game_delete = (req,res) =>{
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
    register_game,
    game_delete,
    game_get,
    registrer_game_post,
}
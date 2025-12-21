const games = require("../models/Games");
const {handleGameError} = require("../handlers/errorHandler.js")
const handleError = handleGameError

//Register game and go to the page
const register_game = (req, res) => {
  res.render("games/register", { name: "Register Game" });
  console.log("Loaded in register page");
};

const registrer_game_post = async (req, res) => {
  const { link, name, description } = req.body;
  try {
    const newGame = new games({
      link: link,
      name: name,
      description: description,
    });
    await newGame.save();
    console.log("Game registered");
  } catch (err) {
    const error = handleError(err);
    console.log(error);
    res.status(301).json({ error });
  }
};

// Delete and go to game page
const game_get = async (req, res, next) => {
  const id = req.params.id;
  await games
    .findById(id)
    .then((result) => {
      console.log(result);
      res.render("games/description", { game: result, name: result.name });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

const game_delete = (req, res) => {
  const id = req.params.id;

  console.log(req.body, "REQ DELETE");
  games
    .findByIdAndDelete(id)
    .then((result) => {
      console.log("Deleted");
      res.redirect("/home");
    })
    .catch((err) => {
      console.log(err);
    });
};

const browse_games = async (req, res) => {
  const allGames = await games.find();
  console.info(allGames);
  res.render("browse", { name: "Browse Games", allGames });
};

const update_content = async (req, res) => {
  try {
    const id = req.params.id;
    const { description } = req.body;
    await games.findByIdAndUpdate(
      { id: id },
      { $set: { description: description } },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register_game,
  game_delete,
  game_get,
  registrer_game_post,
  browse_games,
  update_content,
};

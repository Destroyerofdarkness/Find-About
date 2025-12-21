const anime = require("../models/anime");

const {handleAnimeError} = require("../handlers/errorHandler.js")
const handleError = handleAnimeError
const register_anime_page = (req, res) => {
  res.render("anime/registerAni", { name: "Register Anime" });
};

const anime_make = async (req, res) => {
  const { link, name, episodes, description } = req.body;
  try {
    const newAnime = new anime({
      link: link,
      Name: name,
      Episodes: episodes,
      Description: description,
    });
    await newAnime.save();
    console.log("Anime registered succesfully");
    res.redirect("/home/");
  } catch (err) {
    const error = handleError(err);
    console.log(error);
    res.status(301).json({ error });
  }
};

const anime_page = async (req, res, next) => {
  const id = req.params.id;
  try {
    const ani = await anime.findById(id);
    res.render("anime/aniDescription", { ani, name: ani.Name });
  } catch (error) {
    next();
  }
};

const anime_page_delete = async (req, res) => {
  const id = req.params.id;
  try{
    await anime
    .findByIdAndDelete(id)
    console.log("DELETED", result);
      res.redirect("/home");
  }catch(err){
    console.log(err)
    res.status(301).send(err)
  }  
};

module.exports = {
  anime_make,
  register_anime_page,
  anime_page,
  anime_page_delete,
};

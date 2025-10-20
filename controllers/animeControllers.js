
const { name } = require("ejs");
const anime = require("../models/anime");

const register_anime_page = (req,res) =>{
    res.render("registerAni", {name: "Register Anime"})
}

const anime_make = async (req,res)=>{
    const {link, name, episodes, description} = req.body;

    const newAnime = new anime({
        link:link,
        Name:name,
        Episodes: episodes,
        Description:description
    })
    await newAnime.save()
    .then((result)=>{
        console.log("Anime registered succesfully")
        res.redirect("/home/")
    })
    .catch((err)=>{
        console.log("Error is", err)
    })
}

const anime_page = async (req,res)=>{
const id = req.params.id;
const ani = await anime.findById(id);
res.render("aniDescription", {ani, name: ani.name});
}

const anime_page_delete = async (req,res) =>{
    const id = req.params.id;
    await anime.findByIdAndDelete(id)
    .then((result)=>{
        console.log("DELETED", result)
        res.redirect("/home")
    })
    .catch((err)=>{
        console.log(err)
    });
}

module.exports = {
    anime_make,
    register_anime_page,
    anime_page,
    anime_page_delete
}
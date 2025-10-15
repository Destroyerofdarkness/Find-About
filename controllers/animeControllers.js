const anime = require("../models/anime")

const register_anime_page = (req,res) =>{
    res.render("")
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

module.exports = {
    anime_make,

}
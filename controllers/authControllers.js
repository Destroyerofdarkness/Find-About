const jwt = require("jsonwebtoken")

const maxValidDate = 3*24*60*60

const createJWT = (id)=>{
    return jwt.sign({id}, process.env.secret, {
        expiresIn: maxValidDate
    })
}

const render_login = (req,res )=>{
    try{
        res.render("auth/login")
    }catch(err){
        res.status(500).send(err)
    }
}

const render_register = (req,res)=>{
    try{
        res.render("auth/register")
    }catch{
        res.status(500).send(err)
    }
}

const sign_in = (req,res)=>{
    const {user,pass} = req.body
    console.log("User:", user, "Pass:", pass)
}

module.exports = {
    render_login,
    render_register,
    sign_in
}
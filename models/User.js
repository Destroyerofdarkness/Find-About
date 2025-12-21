const {Schema, model }= require("mongoose");

const userSchema = new Schema({
    user: {
        unique: true,
        type: String,
        required: [true, "Enter Username"]
    },
    pass: {
        type: String,
        required: [true, "Enter Password"]
    }
})


userSchema.statics.login = async function(user, pass){
    const username = await User.findOne({user:user})
    if(username){
        if(username.pass === pass){
            return user._id
        }
        throw Error("Wrong Password")
    }
    throw Error("User not found")
}

const User = model("Users", userSchema)

module.exports = User
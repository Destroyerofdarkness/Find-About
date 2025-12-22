const {Schema, model }= require("mongoose");

const userSchema = new Schema({
    user: {
        unique: true,
        type: String,
        required: [true, "Enter Username"]
    },
    pass: {
        type: String,
        required: [true, "Enter Password"],
        minLength: [6, "Password must be more than 6 letters"]
    }
})


userSchema.statics.login = async function(user, pass){
    const username = await User.findOne({user:user})
    if(username){
        if(username.pass === pass){
            return username._id
        }
        throw Error("Wrong Password")
    }
    throw Error("User not found")
}

userSchema.statics.register = async function(user,pass){
        const newUser = await this.create({user,pass})
        return newUser._id
}

const User = model("Users", userSchema)

module.exports = User
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    userId: mongoose.ObjectId
})

const userModel = mongoose.model('users', userSchema)

export default userModel

// *USERS: Nombre - Email - Id(no repetible)
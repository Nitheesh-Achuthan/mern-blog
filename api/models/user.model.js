import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        requied: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type:String,
        default:'https://img.freepik.com/premium-vector/avatar-profile-pink-neon-icon-brick-wall-background-colour-neon-vector-icon_549897-254.jpg'
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;


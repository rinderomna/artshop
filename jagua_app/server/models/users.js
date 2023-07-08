import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    type: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: [true, "The slug is required"],
        trim: true,
        index: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    cep: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    }
});

const User = mongoose.model("User", userSchema);

export default User;
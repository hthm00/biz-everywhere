const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creates the User Schema
const userSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    cellphone: {
        type: String,
        required: true
    },
    officephone: {
        type: String
    },
    profilepic: {
        url: String,
        default: "profile_image_url" // TODO - add default image
    },
    listbusiness: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
        },
    ],
    savedbusiness: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('User', userSchema);
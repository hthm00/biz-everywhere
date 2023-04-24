const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creates the Picture Schema
const pictureSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    url: String,
    caption: String,
    createdAt: {
        type: Date,
        default: Date.now
      },
});

module.exports = mongoose.model('Picture', pictureSchema);

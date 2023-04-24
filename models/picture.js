const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creates the Picture Schema
const pictureSchema = new Schema({
    url: String,
    caption: String,
    createdAt: {
        type: Date,
        default: Date.now
      },
});

module.exports = mongoose.model('Picture', pictureSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates the Comment Schema
const commentSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Business: { // Not sure if we need this or not
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
    },
    body: String,
  });

module.exports = mongoose.model("Comment", commentSchema);
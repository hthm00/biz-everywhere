const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates the User Schema
const UserSchema = new Schema({
  name: String,
  email: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

//Creates the Post Schema
const PostSchema = new Schema({
  title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  body: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  pictures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Picture",
    },
  ],
});

//Creates the Picture Schema
const PictureSchema = new Schema({
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
});

//Creates the Comment Schema
const CommentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  Post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  body: String,
});

//Connects to the database
mongoose
  .connect("mongodb://localhost:27017/dbmodel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));


//Creates the User, Post, Picture, and Comment models
const User = mongoose.model("Author", UserSchema);
const Post = mongoose.model("Post", PostSchema);
const Picture = mongoose.model("Picture", PictureSchema);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = { User, Post, Picture, Comment };


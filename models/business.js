const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates the Business Schema
const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  employees: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  revenue: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


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
  .connect("mongodb://localhost:27017/local", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));


//Creates the User, Post, Picture, and Comment models
const User = mongoose.model("Author", UserSchema);
const Post = mongoose.model("Post", PostSchema);
const Picture = mongoose.model("Picture", PictureSchema);
const Comment = mongoose.model("Comment", CommentSchema);
const Business = mongoose.model('Business', BusinessSchema);

module.exports = { Business, User, Post, Picture, Comment };
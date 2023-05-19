const mongoose = require("mongoose");


const Schema = mongoose.Schema;

//Creates the Business Schema
const businessSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Retail', 'Food', 'Service', 'Other'], //TODO - add more categories
    required: true
  },
  industry: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  establishedyear: {
    type: Number
  },
  sellingreason: {
    type: String
  },
  askingprice: {
    type: Number,
    required: true
  },
  grossrevenue: {
    type: Number,
    default: 0
  },
  cashflow: {
    type: Number,
    default: 0
  },
  inventory: {
    type: Number,
    default: 0
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  sqrf: {
    type: Number,
    default: 0
  },
  realstate: {
    type: String,
    enum: ['Own', 'Rent'], //TODO - Not sure about what is this
  },
  leaseexp: {
    type: Date
  },
  leasepermonth: {
    type: Number,
    default: 0
  },
  marketingAD: {
    type: Boolean,
    default: true
  },
  listingcreationstatus: {
    type: String,
    enum: ['Draft', 'Published'],
    default: 'Draft'
  },
  listingstatus: {
    type: String,
    enum: ['Active', 'Pending', 'Sold'],
    default: 'Active'
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  pictures: [
    {
      url: String,
      caption: String,
      createdAt: {
          type: Date,
          default: Date.now
        },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      body: String,
    },
  ],

});



module.exports = mongoose.model('Business', businessSchema);
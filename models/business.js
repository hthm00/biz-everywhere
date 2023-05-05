const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();

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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Picture",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

});



module.exports = mongoose.model('Business', businessSchema);


router.get('/', (req, res) => {
  Business.find().then((businesses) => {
    res.json(businesses);
  }).catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

router.post('/', (req, res) => {
  const business = new Business(req.body);
  business.save().then((business) => {
    res.json(business);
  }).catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

router.get('/:id', (req, res) => {
  Business.findById(req.params.id).then((business) => {
    res.json(business);
  }).catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

router.patch('/:id', (req, res) => {
  Business.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

router.delete('/:id', (req, res) => {
  Business.findByIdAndDelete(req.params.id).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});
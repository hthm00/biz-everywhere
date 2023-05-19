const express = require('express');
const router = express.Router();

router.get('/api/businesses', (req, res) => {
    Business.find().then((businesses) => {
      res.json(businesses);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  });
  
  router.post('/api/businesses', (req, res) => {
    const business = new Business(req.body);
    business.save().then((business) => {
      res.json(business);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  });
  
  router.get('/api/businesses/:id', (req, res) => {
    Business.findById(req.params.id).then((business) => {
      res.json(business);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  });
  
  router.patch('/api/businesses/:id', (req, res) => {
    Business.findByIdAndUpdate(req.params.id, req.body).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  });
  
  router.delete('/api/businesses/:id', (req, res) => {
    Business.findByIdAndDelete(req.params.id).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  });
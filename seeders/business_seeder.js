const mongoose = require('mongoose');
const { Business, Post, User, Picture, Comment } = require('../models/business.js');


mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB database!');


  const businesses = [{
    name: 'Acme Inc.',
    description: 'A company that makes everything.',
    owner: '61507a480b8c9265e5dd85de',
    employees: ['61507a480b8c9265e5dd85df', '61507a480b8c9265e5dd85e0'],
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    revenue: 1000000
  },
  {
    name: 'Widget Co.',
    description: 'A company that makes widgets.',
    owner: '61507a480b8c9265e5dd85e1',
    employees: ['61507a480b8c9265e5dd85e2', '61507a480b8c9265e5dd85e3', '61507a480b8c9265e5dd85e4'],
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ];

  Business.create(businesses)
    .then(() => {
      console.log('Businesses seeded successfully!');
      db.close();
    })
    .catch((err) => console.error(err));
});
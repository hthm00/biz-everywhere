const mongoose = require('mongoose');

const Business = require('../models/business');
//const User = require('../models/user');



mongoose.connect('mongodb://localhost:27017/biz-everywhere_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.error(err);
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB database!');


  const businesses = [{
    title: 'Acme Inc.',
    category: 'Retail',
    description: 'A company that makes everything.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85de',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    revenue: 1000000
  },
  {
    title: 'Widget Co.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ,
  {
    title: 'Costco.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ,
  {
    title: 'Walmart.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ,
  {
    title: 'Pizza Hut.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ,
  {
    title: 'Autozone.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ,
  {
    title: 'Square.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ,
  {
    title: 'Kodak.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ,
  {
    title: 'Coors lite.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ,
  {
    title: 'The point.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
    address: {
      street: '456 Broadway',
      city: 'Anycity',
      state: 'NY',
      zip: '67890'
    },
    revenue: 500000
  }
  ,
  {
    title: 'Cooperative Fall.',
    category: 'Retail',
    description: 'A company that makes widgets.',
    askingprice: 1000000,
    owner: '61507a480b8c9265e5dd85e1',
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
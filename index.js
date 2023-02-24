const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});


const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/mydb';

const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
  }
}

connect();

const express = require('express');
const app = express();

app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
  res.render('pages/index');
  // res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
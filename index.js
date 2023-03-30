const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    // res.send('Hello, World!');
    res.render('index');
  });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
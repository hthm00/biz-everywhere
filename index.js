const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views/pages');

app.get('/', (req, res) => {
    // res.send('Hello, World!');
    res.render('view');
  });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
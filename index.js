const express = require('express');
const app = express();
var path = require('path');

//engine setup
app.set('view engine', 'ejs');
app.set('views', './views/pages');

//app configuration 
//app.use(express.static(path.join(__dirname, "js")));
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "node_modules")));



app.get('/', (req, res) => {
    // res.send('Hello, World!');
    res.render('view');
  });



app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
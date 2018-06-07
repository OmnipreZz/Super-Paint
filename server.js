
var express = require('express');


var app = express();


//appel du fdossier public
app.use(express.static('public'));


//appel de ma page ejs
app.get('/', function (req, res) {
    res.render('index.ejs');
});





// erreur 404
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

// localhost:8080
app.listen(8080);
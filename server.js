// declare express !!
var express = require('express');

//declare express sur app
var app = express();

//appel moteur ejs
app.set('view engine', 'ejs');

//appel du dossier public (css, script.js)
app.use(express.static('public'));


//appel du fichier index.ejs (accueil)
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
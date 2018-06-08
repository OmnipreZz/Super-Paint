// declare express !!
var express = require('express');

//declare express sur app
var app = express();

//appel moteur ejs
app.set('view engine', 'ejs');

//appel du dossier public (css, script.js)
app.use(express.static('public'));
console.log('Mon serveur socket est en marche !');


//appel du fichier index.ejs (accueil)
app.get('/', function (req, res) {
    res.render('index.ejs');
});

// erreur 404
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

//server sur port 8080
server = app.listen(process.env.PORT || 8080);



//on require socket.io
var io = require('socket.io')(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection: ' + socket.id);
    
    socket.on('mouse', mouseMsg);
    
    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
        // io.sockets.emit('mouse', data);
        console.log(data);
    }
}

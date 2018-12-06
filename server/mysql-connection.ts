var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'racunalniski_koticek',
    user     : 'root',
    password : 'aljazerzinroot',
});


connection.connect(function(err) {
    if (err) {
        console.error('Napaka  Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});



module.exports = connection; // da lahko z klicem var con = require(this.path); in dobim vn ta connection spremenljivko
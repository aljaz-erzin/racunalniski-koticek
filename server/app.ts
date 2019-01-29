import { routes } from './router/routes'; 

var express = require('express');
var connection = require('./mysql-connection');
var session = require('express-session');
var sess;
const app = express();


// Session: 
app.use(session({ secret: 'secret secret bambambam', cookie: { maxAge: 60000 }}))

// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});


// Handle POST requests that come in formatted as JSON
app.use(express.json());
app.use('/', routes);

app.post('/login',function(req,res){

    connection.query('SELECT * FROM stranka WHERE uporabnisko_ime=?', req.body.uporabnisko_ime, function (error, results) {
        console.log("Geslo v body: " + req.body.geslo);
        if (results.length > 1)
            return "Error -> More than 1 result!";
            if (error)
            throw error;
        if (results.length == 0)
            return res.send(null)
        if (results[0].geslo !== req.body.geslo)
        {
            console.log("Napacno geslo!");
            return res.send("Napačno geslo!");
        }
            sess = req.session;
            sess.stranka = results[0];
            console.log(results[0]);
            req.session.user = results[0];
            res.end('done');
        
    })
});
app.get('/logout',function(req,res){
    req.session.destroy(function(err) {
        if(err) {
        console.log(err);
        } else {
        }
});
    
  });

// start our server on port 4201
app.listen(4201, '127.0.0.1', function() {
    console.log("Server now listening on 4201");
});


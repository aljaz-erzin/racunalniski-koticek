var express = require('express');
var connection = require('../mysql-connection');

export const app = express.Router();
export { app as routes_artikli };


app.get('/artikli', (req, res) =>
    connection.query('SELECT * FROM artikli', function (error, results) {
        if (error)
            throw error;
            console.log(results);
            
            res.send(results)
    })
)

module.exports.routes_artikli = app;
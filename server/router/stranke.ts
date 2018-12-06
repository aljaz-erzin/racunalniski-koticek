
var express = require('express');
var connection = require('../mysql-connection');

export const app_stranke = express.Router();
export { app_stranke as routes_stranke };

app_stranke.get('/', (req, res) =>
    connection.query('SELECT * FROM stranka', function (error, results) {
        if (error)
            throw error;
            console.log(results);
            
            res.send(results)
    })
)


module.exports.routes_stranke = app_stranke;

var express = require('express');
var connection = require('../mysql-connection');

export const app = express.Router();
export { app as routes };


app.get('/', (req, res) =>
    connection.query('SELECT * FROM stranka', function (error, results) {
        if (error)
            throw error;
            console.log(results);
            
            res.send(results)
    })
)
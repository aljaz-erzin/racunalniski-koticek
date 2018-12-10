
var express = require('express');
var connection = require('../mysql-connection');

export const app = express.Router();
export { app as routes_stranke };

app.get('/', (req, res) =>
    connection.query('SELECT * FROM stranka', function (error, results) {
        if (error)
            throw error;
            console.log(results);
            console.log("10.12");
            res.send(results)
    })
)

app.get('/:id', (req, res) =>
    connection.query('SELECT * FROM stranka WHERE id=?', req.params.id,  function (error, results) {
        if (error)
            throw error;
            console.log(results);
            res.send(results)
    })
)
app.delete('/:id', (req, res) => 
    connection.query("DELETE FROM stranka WHERE id = ?", req.params.id,  function (err, result) {
        if (err)
        {
            throw err;
        } 
    
        console.log("Deleted: " + result.affectedRows);
        res.send(result) //Kakšen je result
    })
)

app.post('/', (req, res) =>
    connection.query("INSERT INTO stranka (ime, priimek, e_mail, uporabnisko_ime, geslo) VALUES (?, ?, ?, ?, ?)", [req.body.ime, req.body.priimek, req.body.e_mail, req.body.uporabnisko_ime, req.body.geslo],  function (err, result) {
        if (err)
        {
            throw err;
        } 
        console.log("Added: "+ req.body.ime);
        res.send(result)
    })
)

app.put('/:id', (req, res) =>
    connection.query("UPDATE stranka SET ime=?, priimek=?, e_mail=?, uporabnisko_ime=?, geslo=? WHERE id=?", [req.body.ime, req.body.priimek, req.body.e_mail, req.body.uporabnisko_ime, req.body.geslo, req.params.id],  function (err, result) {
        if (err)
        {
            throw err;
        } 
        console.log("Updated: " + req.body.ime);
        res.send(result)
    })
)

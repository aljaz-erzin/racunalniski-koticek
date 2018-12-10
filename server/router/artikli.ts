var express = require('express');
var connection = require('../mysql-connection');

export const app = express.Router();
export { app as routes_artikli };


app.get('/', (req, res) =>
    connection.query('SELECT * FROM artikel', function (error, results) {
        if (error)
            throw error;
            console.log(results);
            console.log("aloha");

            res.send(results)
    })
)

app.get('/Popust-desc', (req, res) =>
    connection.query('SELECT * FROM artikel WHERE popust > 0 ORDER BY  popust DESC', function (error, results) {
        if (error)
            throw error;
            console.log(results);
            console.log("aloha");

            res.send(results)
    })
)

app.get('/:id', (req, res) =>
    connection.query('SELECT * FROM artikel WHERE id=?', req.params.id,  function (error, results) {
        if (error)
            throw error;
            console.log(results);
            
            res.send(results)
    })
)

app.delete('/:id', (req, res) => 
    connection.query("DELETE FROM artikel WHERE id = ?", req.params.id,  function (err, result) {
        if (err)
        {
            throw err;
        } 
        console.log("Deleted Artikli: " + result.affectedRows);
        res.send(result)
    })
)

app.post('/', (req, res) =>
    connection.query("INSERT INTO artikel (naziv, opis, novo, zaloga_kolicina, popust, img_url) VALUES (?, ?, ?, ?, ?, ?)", [req.body.naziv, req.body.opis, req.body.novo, req.body.zaloga_kolicina, req.body.popust, req.body.img_url],  function (err, result) {
        if (err)
        {
            throw err;
        } 
        console.log("Added artikel: "+ req.body.ime);
        res.send(result)
    })
)

app.put('/:id', (req, res) =>
    connection.query("UPDATE artikel SET naziv=?, opis=?, novo=?, zaloga_kolicina=?, popust=?, img_url=? WHERE id=?", [req.body.naziv, req.body.opis, req.body.novo, req.body.zaloga_kolicina, req.params.popust, req.params.img_url, req.params.id],  function (err, result) {
        if (err)
        {
            throw err;
        } 
        console.log("Updated artikel: " + req.body.ime);
        res.send(result)
    })
)

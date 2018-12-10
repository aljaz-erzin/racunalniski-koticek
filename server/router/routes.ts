import { routes_stranke } from './stranke'
import { routes_artikli } from './artikli'
var express = require('express');

export const app = express.Router();
export { app as routes };

app.get('/', function(req, res) {
    res.send('Server Node, dobrodošli!');
  });

app.use('/stranke', routes_stranke);

app.use('/artikli', routes_artikli);
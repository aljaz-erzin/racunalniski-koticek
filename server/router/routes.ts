import { routes_login } from './login-registration'
import { routes_artikli } from './artikli'
var express = require('express');

export const app = express.Router();
export { app as routes };

app.get('/', function(req, res) {
    res.send('Server Node, dobrodošli!');
  });

app.use('/login-registration', routes_login);

app.use('/artikli', routes_artikli);
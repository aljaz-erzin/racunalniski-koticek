var express = require('express');
export const app = express.Router();
export { app as routes };



app.get('/', (req, res) => res.send([{hello: 'world'}]));
app.get('/users', (req, res) => res.send([{hello: 'Aljaz'}]));
app.post('/users', (req, res) => res.send({body: req.body}));
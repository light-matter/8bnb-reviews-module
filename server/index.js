const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const path = require('path');
const db = require('../db.js');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/reviews', (req, res) => {
  db.getReviews((err, data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
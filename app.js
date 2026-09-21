const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Testing Volumes now!!');
});

module.exports = app;

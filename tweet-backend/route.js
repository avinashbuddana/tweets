const express = require('express');
const bodyParser = require('body-parser');


// Routes Path
const tweetRoute = require('./modules/tweet/tweetRouter');


const app = express.Router();

// Routes
app.use('/api/v1/tweet', tweetRoute);


app.all('/*', (req, res) => {
  return res.status(404).json({ message: 'Invalid Request' });
});

module.exports = app;

const express = require('express');
global._ = require('lodash');
global.moment = require('moment');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.set('port', process.env.PORT);
app.use(bodyParser.json({ limit: '1gb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '1gb' }));
app.use(cors());
app.use(require('../route.js'));

module.exports = app;


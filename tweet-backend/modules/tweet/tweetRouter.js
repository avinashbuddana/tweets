const express = require('express');
const tweetCtr = require('./tweetController');

const tweetRouter = express.Router();


const tweetMiddleware = [
  tweetCtr.getTweets,
];
tweetRouter.post('/getTweets', tweetMiddleware);

// const getUselist=[
//   tweetCtr.getUserList
// ]
// tweetRouter.post('/getUsers', getUselist);
module.exports = tweetRouter; 
  

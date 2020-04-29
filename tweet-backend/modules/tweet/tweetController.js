
const tweetCtr = {};
const twit = require('twit');

const Twitter = new twit({
  consumer_key: 'ADD YOUR CONSUMER KEY',
  consumer_secret: 'ADD YOUR CONSUMER SECRET KEY',
  access_token: '##ADD YOUR ACCESS TOKEN',
  access_token_secret: '##ADD YOUR TWITTER ACCESS SECRET',
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  // strictSSL: true, // optional - requires SSL certificates to be valid.
});

tweetCtr.getTweets = (req, res) => {
  Twitter.get('search/tweets', {
    q: req.body.hashtag, // use the user posted hashtag value as the query
    count: 100,
    result_type: 'mixed', 

  }).catch((err) => {
    console.log('caught error', err.stack);

    return res.status(400).json({ 
      message: 'ERROR FROM TWITTER',
      data: err.stack, 
    });
    // Render the index page passing in the hashtag and the Twitter API results
  }).then(function (result) {
    return res.status(200).json({ message: 'SUCCESS', data: result.data });
    // Render the index page passing in the hashtag and the Twitter API results
  });
};


module.exports = tweetCtr;

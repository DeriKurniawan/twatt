const twitt = require('../models/twatts');
require('dotenv').config();

module.exports = {
    posting : function(text, callback){
    twitt.post(
      'https://api.twitter.com/1.1/statuses/update.json?status='+text,
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_TOKEN_SECRET,
      text,
      'text',
      function(e, data){
        if(e){
          console.log(e)
        } else {
          callback(data);
        }
      }
    );
  },
  search : function(text, callback){
    twitt.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${text}`,
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_TOKEN_SECRET,
      function(e, data){
        if(e) console.error(e);
        callback(data);
      }
    )
  },
  searching: function(text, callback){
    twitt.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${text}&count=4`,
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_TOKEN_SECRET,
      function(e, data){
        if(e) console.error(e);
        callback(data);
      }
    )
  },
  trends: function(callback){
    twitt.get(
      `https://api.twitter.com/1.1/trends/user_timeline.json`,
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_TOKEN_SECRET,
      function(e, data){
        if(e) console.error(e);
        callback(data);
      }
    )
  }
}

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
  }
}

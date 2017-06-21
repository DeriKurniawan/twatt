const twitt = require('../helpers/twattprocess');

var methods = {}

methods.postStatus = function(req, res){
  let text = req.body.status
  twitt.posting(text, (data)=>{
      res.send({
        msg: 'posting status to twitter is success!',
        data: data
      })
  })
}


module.exports = methods;

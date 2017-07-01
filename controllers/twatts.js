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

methods.searchTwitt = function(req, res){
  let text = req.params.search
  twitt.search(text, (data)=>{
    res.send({
      msg: 'search status on twitter is success!',
      data: data
    })
  })
}

methods.searchTrends = function(req, res){
  let username = req.params.name
  twitt.searching(username, (data)=>{
    res.send(data)
  })
}

methods.trends = function(req, res){
  twitt.trends((data)=>{
    res.send(data)
  })
}

module.exports = methods;

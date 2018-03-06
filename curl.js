const request = require('request')

const curl = function(webAddress){
  request(webAddress, function(err, response, body){
    if (err) throw err;
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  })
}

module.exports = curl;

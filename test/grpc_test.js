const lightning = require("../middleware/lnrpc.js")


let request = {} 
lightning.walletBalance(request, function(err, response) {
  console.log(response);
})

lightning.getInfo({}, function(err, response) {
  console.log(response);
})
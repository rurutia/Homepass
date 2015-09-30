var express    = require('express');
var app        = express();
app.use(express.static(__dirname + '/client'));

// Start server
app.listen(3000, function () {
    console.log("Homepass server listening on port %d", this.address().port);
});

var express = require('express')
var app = express();
var expressLayouts = require('express-ejs-layouts');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.get('/',function(req, res) {
  res.render("index");
});

app.listen(6969,function() {
  console.log('listening on port 6969')
});
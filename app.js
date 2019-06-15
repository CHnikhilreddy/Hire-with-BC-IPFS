var express = require('express');
const session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express()
app.use(session({secret: "Shh, its a secret!"}));
const hbs = require('hbs');
var http = require('http').Server(app);

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.urlencoded({ extended: false}));

app.use('/', require('./routes/index'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
var express = require('express'); 
var app = express();
var emails = require('./emails');
var routes =require('./routes');
app.use(express.json());
app.get('/user', routes.create);
app.on('user:created', emails.emails); 
app.listen(3000);
var express = require('express');
var app = express();
var Schema = require('validate');
var parser = require('fast-xml-parser');
var util = require('util');
var Page = new Schema();

Page.path('title').type('string').required();

function ValidateError(errors) {
    this.statusCode = 400;
    this.message = errors.json(',');
}
util.inherits(ValidateError, Error)

function xmlMiddleware() {
    if (!req.is(xml)) return next();
    var body = '';
    req.on('data', function(str) {
      body += str;
    });
    req.on('end', function() {
        req.body = parser.parse(body.toString(), {
            
        });
        next();
    });
}

function checkValidXml(req, res, next) {
    var page = Page.validate(req.body.page);
    if (page.errors.length) {
        next(new ValidateError(page.errors));
    } else {
        next();
    }
}

function errorHandler(err, req, res, next) {
  console.error('errorHandler', err);
  res.send(err.statusCode || 500, err.message);  
}

app.use(xmlMiddleware);
app.post('/pages', checkValidXml, function(req, res) {
    console.log('Valid page:', req.body.page);
    res.send(req.body);
})
app.use(errorHandler);
app.listen(3000);


// curl -H "Content-Type: application/xml" -X post -d '<page><title>Node</title></page>' http://localhost:3000/pages
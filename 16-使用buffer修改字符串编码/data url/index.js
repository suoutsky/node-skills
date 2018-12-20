var fs = require('fs');
var mime = 'image/png';
var encoding = 'base64';

var data = fs.readFileSync('./a.png').toString(encoding);
var uri = 'data:' + mime + ';' + encoding + ',' + data;

console.log(uri);

fs.writeFileSync('./a.png', buf);

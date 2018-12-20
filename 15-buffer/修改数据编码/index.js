// var buf = new ArrayBuffer(255);
// buf[0] = 23;

var fs = require('fs');
fs.readFile('./file.txt', function(err, buf) {
    Buffer.isBuffer(buf);
    console.log(buf);
    console.log(buf.toString());
    console.log(buf.toString('ascii'));

})
var user = 'tim';
var pass = 'dcan';

var authstring = user + ':' + pass;

var buf = new ArrayBuffer(authstring);

var encode = Buffer(user + ':' + pass).toString('base64');

console.log(encode);
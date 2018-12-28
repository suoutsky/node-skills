var util = require('util');

function HTTPError() {
    Error.call(this, arguments);
}

util.inherits(HTTPError, Error);



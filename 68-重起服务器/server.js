
var fs = require('fs');
var exec = require('child_process').exec;
/**
 *莫不是webpack底层类似？
 */
function watch() {
    var child = exec('node server.js');;
    var watcher = fs.watch(__dirname + '/server.js', function(event) {
        console.log('File changed, reloading');
        child.kill();
        watcher.close();
        watch();
    });
}
watch();
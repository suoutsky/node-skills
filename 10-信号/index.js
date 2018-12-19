process.stdin.resume();
process.on('SIGHUP', function() {
  console.log('Reading configuration..');
});
console.log('PID', process.pid);
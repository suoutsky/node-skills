var cp = require('child_process');
cp.exec('cat messy.text | sort | uniq', function (err, stdout, stderr) {
  console.log(stdout);
})
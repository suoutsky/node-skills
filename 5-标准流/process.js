// Run with:
//  cat file.txt | node process.js

process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(text){
  process.stdout.write(text.toUpperCase());
})
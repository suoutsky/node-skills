var cheerio = require('cheerio');
var fs = require('fs');
fs.readFile('./html/amaz.html', 'utf8', function(err, html) {
  var $ = cheerio.load(html);
  var releases = $('.center');
  console.log(releases);

})
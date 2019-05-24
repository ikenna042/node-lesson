var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' This is an added text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
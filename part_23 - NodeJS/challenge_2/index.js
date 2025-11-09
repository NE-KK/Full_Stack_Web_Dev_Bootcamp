
const fs = require('node:fs');

const content = 'Welcome to Node.js.';

fs.writeFile('my_message.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
    console.log('File written successfully');
  }
});



fs.readFile('my_message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

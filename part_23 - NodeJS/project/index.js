/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter a URL to generate a QR code:',
    },
    {
      type: 'input',
      name: 'filename',
      message: 'Enter a filename to save the QR code image (without extension):',
    },
  ])
  .then((answers) => {
    const qr = require('qr-image');
    const fs = require('fs');

    const url = answers.url;
    const filename = answers.filename;

    // Generate QR code image
    const qrImage = qr.image(url, { type: 'png' });
    const qrImagePath = `${filename}.png`;
    const writeStream = fs.createWriteStream(qrImagePath);
    qrImage.pipe(writeStream);

    writeStream.on('finish', () => {
      console.log(`QR code image saved as ${qrImagePath}`);
    });

    // Save URL to a text file
    const urlFilePath = `${filename}.txt`;
    fs.writeFile(urlFilePath, url, (err) => {
      if (err) {
        console.error('Error writing URL to file:', err);
      } else {
        console.log(`URL saved to ${urlFilePath}`);
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment  
    } else {
      // Something else went wrong
    }
  });

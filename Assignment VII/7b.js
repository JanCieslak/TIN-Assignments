'use strict';

const path = require('path');
const fs = require('fs');

function watch(directory) {
  const fullpath = path.join(__dirname, directory);
  
  fs.watch(fullpath, { recursive: true }, (event, filename) => {
    if (event === 'change') {
      const fullFilepath = path.join(__dirname, directory, filename);
      if (fs.lstatSync(fullFilepath).isFile()) {
        const content = fs.readFileSync(fullFilepath, 'utf8');
        console.log(content);
      }
    }
  });
}

if (process.argv.length == 3) {
  watch(process.argv[2]);
}
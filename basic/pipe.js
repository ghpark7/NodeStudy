const fs = require('fs');

const readStream = fs.createReadStream('readme2.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);
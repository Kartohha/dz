const fs = require('fs')
const readStream = fs.createReadStream('./text.txt');
const writeStream = fs.createWriteStream('./newtext.txt')

readStream.on('data', (chunk) => {
   writeStream.write(chunk)
   writeStream.write('\n*****************************************************************************************************\n')
})
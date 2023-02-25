
const fs = require('fs')
const readStream = fs.createReadStream('../text.txt');
const writeStream = fs.createWriteStream('./newtext.txt');
let i=0
readStream.on('data', (chunk) => {
   writeStream.write(chunk)
   writeStream.write(`\n№${i+=1}\n`)
})
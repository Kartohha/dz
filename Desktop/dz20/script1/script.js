const fs = require('fs')
const readStream = fs.createReadStream('../text.txt');

readStream.on('data', (chunk) => {
   console.log(`\n****************************************************************\n`)
   console.log(chunk.toString())
})
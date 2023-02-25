let fs = require('fs');
let zlib = require('zlib')

let compress=()=>{
   const gzip = zlib.createGzip()
   const input = fs.createReadStream('../index.html')
   const output = fs.createWriteStream('./CompressedIndexhtml.txt.gz')
   input.pipe(gzip).pipe(output)
}
compress()


let fs = require('fs');
let zlib = require('zlib')

let compress=()=>{
   const gzip = zlib.createGzip()
   const input = fs.createReadStream('../index.html')
   const output = fs.createWriteStream('./CompressedIndexhtml.txt.gz')
   input.pipe(gzip).pipe(output)
}
let compress2=()=>{
   const gzip = zlib.createGzip()
   const input = fs.createReadStream('../style.css')
   const output = fs.createWriteStream('./Compressedstylecss.txt.gz')
   input.pipe(gzip).pipe(output)
}
compress()
compress2()

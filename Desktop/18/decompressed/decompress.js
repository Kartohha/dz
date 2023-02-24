const { create } = require('domain');
let fs = require('fs');
let zlib = require('zlib');

let decompress=()=>{
   const unzip = zlib.createUnzip();
   const input = fs.createReadStream('../compressed/Compressedindexhtml.txt.gz')
   const output = fs.createWriteStream('./decompressedindex.html')
   input.pipe(unzip).pipe(output)
}
let decompress2=()=>{
   const unzip = zlib.createUnzip();
   const input = fs.createReadStream('../compressed/Compressedstylecss.txt.gz')
   const output = fs.createWriteStream('./decompressedstyle.css')
   input.pipe(unzip).pipe(output)
}
decompress()
decompress2()
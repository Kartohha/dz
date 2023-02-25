const { create } = require('domain');
let fs = require('fs');
let zlib = require('zlib');

let decompress=()=>{
   const unzip = zlib.createUnzip();
   const input = fs.createReadStream('../script3/Compressedindexhtml.txt.gz')
   const output = fs.createWriteStream('./decompressedindex.html')
   input.pipe(unzip).pipe(output)
}
decompress()

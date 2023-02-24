const fs = require('fs')

let one=()=>{fs.writeFileSync('./index.html', `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   
</body>
</html>`, (error) => {
   error ? console.log(error) : null
 })
}

let two=()=>{
   fs.mkdirSync('./styles', () => { 
    })
    fs.writeFileSync('./styles/style.css', `* {
      padding: 0;
      margin: 0;
      box-sizing: border-box;

   }`, (error) => {
      error ? console.log(error) : null
    })
   }
 
 let three=()=>{
   fs.unlink('./styles/style.css', () => { })
   fs.unlink('./index.html', () => { })
   fs.rmdir('./styles', () => { })
 }
// one();
// two();
// three();


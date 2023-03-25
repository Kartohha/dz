PORT=3000


let names =["Shepherd", "John", "Kaiden", "Graysen", "Esteban", "Ismail", "Nickolas", "Urbane", "Karter", "Woodrow", "Levi", "Anderson", "Ronan", "Ramon", "Hassan", "Zia", "Tatum", "Callen", "Maya", "Zaida", "Isabelle", "Novalee", "Makayla", "Juliet", "Wilhelmina", "Alana", "Tahlia", "Tabitha", "Charlee", "Lucy"]
let country=["Andorra", "Belarus", "Bulgaria", "Canada", "Belize", "Dominica" ,"Iraq", "Belize", "Cuba" ,"Jersey", "Martinique", "Monaco", "Niger", "Peru", "Argentin", "Bahamas", "San Marino", "Sierra Leone", "Spain", "Togo", "Tokelau"]
let arr=[]

class obj{
   constructor(name, count, age){
   this.name = name;
   this.country = count;
   this.age = age;
   }
 }
 
for(let i=0;i<30;i++ ){
      let name=names[Math.floor(Math.random()*names.length)];
      let count=country[Math.floor(Math.random()*country.length)];
      let age = Math.floor(Math.random() * (100 - 1) + 1)
      arr.push(new obj(name, count, age))

   }

const express = require('express')
const path = require('path')
const fs = require('fs')
const server = express()
const strobj = JSON.stringify(arr);
fs.writeFileSync("./data.json", strobj)

const Users=JSON.parse(fs.readFileSync("data.json"))

server.use(express.static('styles'))

const createPath = (page) => path.resolve(__dirname, `${page}.ejs`)

server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

server.get('/', (req, res) => {
    res.render(createPath('list'), {Users})
})
server.use((req, res) => {
    res
        .status(404)
        .render(createPath('error'))
})

server.use(express.static('styles'))
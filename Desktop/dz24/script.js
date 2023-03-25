const fs=require('fs')
let names =["Shepherd", "John", "Kaiden", "Graysen", "Esteban", "Ismail", "Nickolas", "Urbane", "Karter", "Woodrow", "Levi", "Anderson", "Ronan", "Ramon", "Hassan", "Zia", "Tatum", "Callen", "Maya", "Zaida", "Isabelle", "Novalee", "Makayla", "Juliet", "Wilhelmina", "Alana", "Tahlia", "Tabitha", "Charlee", "Lucy"]
let country=["Andorra", "Belarus", "Bulgaria", "Canada", "Belize", "Dominica" ,"Iraq", "Belize", "Cuba" ,"Jersey", "Martinique", "Monaco", "Niger", "Peru", "Argentin", "Bahamas", "San Marino", "Sierra Leone", "Spain", "Togo", "Tokelau"]
let arr = []
class obj{
   constructor(name, count, age, money){
   this.name = name;
   this.country = count;
   this.age = age;
   this.money = money;
   }
 }
 
for(let i=0;i<50;i++ ){
      let name=names[Math.floor(Math.random()*names.length)];
      let count=country[Math.floor(Math.random()*country.length)];
      let age = Math.floor(Math.random() * (100 - 1) + 1);
      let money = Math.floor(Math.random() * (100000 - 1000) + 1000);
      arr.push(new obj(name, count, age, money))
   }
const obg = JSON.stringify(arr);
fs.writeFileSync("./data.json", obg)

const Users=JSON.parse(fs.readFileSync("data.json"))
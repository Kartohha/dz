import putData from "./put.mjs"
const URL = 'http://localhost:3000/'
let dis = document.querySelector('.d');
let like = document.querySelector('.l');
let u =0
let infl = document.querySelector('.ll')
let infd = document.querySelector('.dd')
let arr = [];
document.addEventListener('keydown', function(event) {
   if (event.code == "ShiftLeft") {
      asyncfn()
   
   }
 });
const getDatabase = async (url) => {
   const res = await fetch(url)
   const json = await res.json()
   return json
}


dis.addEventListener('click', function(){
   
   if(u==0){
   let infl = document.querySelector('.ll')
   let infd = document.querySelector('.dd')
   infd.innerHTML = +(infd.innerHTML)+1
   u=1
   infl.innerHTML = 0;
   }
   else if(u==1){
      let infl = document.querySelector('.ll')
   let infd = document.querySelector('.dd')
   infd.innerHTML = 0
   u=0
   }
}
)
let p=0
like.addEventListener('click', function(){

   let infl = document.querySelector('.ll')
   let infd = document.querySelector('.dd')
   if(p==0){
   let infl = document.querySelector('.ll')
   infl.innerHTML = +(infl.innerHTML)+1
   p=1
   infd.innerHTML = 0;
   }
   else if(infl.innerHTML!=0||p==1){
      let infl = document.querySelector('.ll')
   infl.innerHTML = 0
   p=0
   
   }
}
)
let def=document.querySelector('.def')
let o=1;
let n=0
document.querySelector('.commenting').addEventListener('keydown', function(e) {
   
   if (e.keyCode ===13) {
            
      n+=1
      let com = document.createElement('div')
      document.querySelector('.comments').appendChild(com);
      com.className = "com"
      com.innerHTML = document.querySelector('.commenting').value
      let red=document.createElement('div')
      let elements = document.querySelectorAll('.com')
      elements.forEach((el) =>{ el.appendChild(red)})
      red.className="redact"

      red.addEventListener("click", function(event){
         let target = event.target
         
     
   let r=prompt("Изменить комментарий")
   target.parentElement.innerHTML=r
})
      let objcom={
         "commentId": n,
         "text": document.querySelector('.commenting').value
      }
      arr.push(objcom)
      
      
   }
 });
 
  let af =async () => {
   let obj =await getDatabase(`${URL}POST`)
   infd.innerHTML = `${obj["dislike"]}`
   infl.innerHTML = `${obj['like']}`
   if(`${obj["comments"].length}`>0){
      for(let i=0; i<`${obj["comments"].length}`;i++){
         let com = document.createElement('div')
      document.querySelector('.comments').appendChild(com);
      com.className = "com"
      com.innerHTML = `${obj["comments"][i].text}`
      arr.push(obj["comments"][i])

      let red=document.createElement('div')
      let elements = document.querySelectorAll('.com')
      elements.forEach((el) =>{ el.appendChild(red)})
      red.className="redact"

      red.addEventListener("click", function(event){
         let target = event.target
         
   let r=prompt("Изменить комментарий")
   target.parentElement.innerHTML=r
})
//       }
//       let red=document.createElement('div')
//       let elements = document.querySelectorAll('.com')
//       elements.forEach((el) =>{ el.appendChild(red)})
//       red.className="redact"

//       red.addEventListener("click", function(event){
//          let target = event.target
         
     
//    let r=prompt("Изменить комментарий")
//    target.parentElement.innerHTML=r

// })
   }
   }
}
   af();
const asyncfn = async () => {
   await putData(`${URL}POST`, {"like": `${infl.innerHTML}`, "dislike": `${infd.innerHTML}`, "comments": arr})
   
}

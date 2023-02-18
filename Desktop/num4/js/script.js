import postData from "./post.mjs";
import getData from "./get.mjs";
let set = document.querySelector('.set');
let get = document.querySelector('.get');
let URL = "http://localhost:3000/USERS";

set.addEventListener('click', async(e)=>{
   e.preventDefault()
   const id = document.querySelector('input.id').value
   const name = document.querySelector('input.name').value
   const age = document.querySelector('input.age').value
   const gender = document.querySelector('input.gender').value
   
   let obj = {
      "id": id,
      "name": name,
      "age": age,
      "gender": gender
  }
   await postData(URL, obj)
})
let users = document.querySelector('.users')
get.addEventListener("click", async(e)=>{
   e.preventDefault()
   let data = await getData(URL)
   for(let i=0; i<data.length; i++){
      console.log(data[i].id)
      users.insertAdjacentHTML(`beforeend`, `
            <div class="user">
                <span class="id">id: ${data[i].id}<br></span>
                <span class="name">имя: ${data[i].name}<br></span>
                <span class="age">возраст: ${data[i].age}<br></span>
                <span class="gender">пол: ${data[i].gender}<br></span>
            </div>
        `)
   }
})






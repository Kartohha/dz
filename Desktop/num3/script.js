let comment = document.querySelector('.comment');
let commentnew = document.querySelector('.commentnew');
let but = document.querySelector('.button');
let URL = "http://localhost:3000/USERS"

const getData = async (url) => {
   const res = await fetch(url)
   const data = await res.json()
   return data
}

but.addEventListener("click", async()=>{
   let data = await getData(URL)
   for(let i=0; i<data.length; i++){
      comment.insertAdjacentHTML(`beforeend`, `
        <div class="com">
            <span>${data[i].name}</span>
            <p>${data[i].comment}</p>
        </div>`
        )
        if(data[i].comment.length>=20){
         data[i].comment = data[i].comment.slice(0, 20)+"..."
     }
      commentnew.insertAdjacentHTML(`beforeend`, `
      <div class="com">
            <span>${data[i].name}</span>
            <p>${data[i].comment}</p>
        </div>`
      )
        
   }
})
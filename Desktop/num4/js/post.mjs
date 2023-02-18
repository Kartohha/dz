const postData = async (url, obj) => {
   const res = await fetch(url, {
       method: 'POST',
       body: JSON.stringify(obj),
       headers: { 'Content-type': 'application/json; charset=UTF-8' },
   })
   return res.json()
}
export default postData
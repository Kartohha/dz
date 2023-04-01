let putData = async (url, obj) => { 
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    return res.json();
}

export default putData
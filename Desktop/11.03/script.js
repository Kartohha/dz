const express = require('express')
const path = require('path')
const fs = require('fs')
const server = express()
const PORT = 4000


server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})


const createPath = (page) => path.resolve(__dirname, `${page}.ejs`)
server.set('view engine', 'ejs')
server.get('/', (req, res) => {
   const UsersData=JSON.parse(fs.readFileSync("data.json"))
   res.render(createPath('index'), { UsersData })
   
})
server.use((req, res) => {
   res
       .status(404)
       .render(createPath('error'))
})


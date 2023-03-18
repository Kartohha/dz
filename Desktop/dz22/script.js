const express = require('express')
const path = require('path')
const fs = require('fs')
const server = express()
server.set('view engine', 'ejs');
const URL = 'http://localhost:3000/'
const PORT = 3000

server.use(express.static('styles'))

const createPath = (page) => path.resolve(__dirname, `${page}.ejs`)

server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

server.get('/', (req, res) => {
    res.render(createPath('index'))
})
server.get('/page2', (req, res) => {
    const Users=JSON.parse(fs.readFileSync("data.json"))
    res.render(createPath('page2'), {Users})
})
server.get('/page3', (req, res) => {
    res.render(createPath('page3'))
    
})
server.get('/page4', (req, res)=>{
    res.redirect('/page2')
})
server.use((req, res) => {
    res
        .status(404)
        .render(createPath('error'))
})
const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log('server req')
    res.setHeader('Content-Type', 'text/html')
    const createPath = (page) => path.resolve(__dirname, `${page}.html`)
    let basePath = ''
    switch (req.url) {
        case '/':
            basePath = createPath('index')
            res.statusCode = 200
            break
        case '/page3':
            res.statusCode = 200
            break
        case '/page1':
            basePath = createPath('page1')
            res.statusCode = 200
            break
        case '/page2':
            basePath = createPath('page2')
            res.statusCode = 200
            break
        default:
            basePath = createPath('error')
            res.statusCode = 404
            break
    }

    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err)
            res.statusCode = 500 
            res.end()
        }
        else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})
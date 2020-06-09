const fs = require ('fs');
const path = require('path');
const EventEmiter = require('events');
const HTTP = require('http');


const server = HTTP.createServer((req, res)=>{
    const ext = path.extname(req.url)
    let contentType = 'text/html'

    switch(ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if (!ext){
        fs.readFile(path.join(__dirname, req.url, 'index.html'), 'utf-8', (err, data) => {
            if(err) {
                res.writeHead(404, {})
            } else {
                res.writeHead(200, {
                    'Content-Type': contentType
                })
                res.end(data)
            }
        }) 
    } else {
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if(err) {
                res.writeHead(404, {})
            } else {
                res.writeHead(200, {
                    'Content-Type': contentType
                })
                res.end(data)
            }
        }) 
    }
})

server.listen(4000, ()=>{
    console.log('[Server has been started...]')
})
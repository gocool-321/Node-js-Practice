const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("Hello from Web Server")
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("check out http://localhost:8000/")
})
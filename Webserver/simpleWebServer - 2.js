const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.end(`this is where you navigated to: ${req.url}`)
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("check out http://localhost:8000/")
})
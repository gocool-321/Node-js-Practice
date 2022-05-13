const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(202,{
        'Hey-There':'I am Gokul',
        'content-type':'application/json'
    });
    const data = {
        name :'gokul',
    }
    res.end(data)
    res.end("Hey")
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("check out http://localhost:8000/")
})
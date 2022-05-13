const http = require("http") // internally uses the event
const server = http.createServer()

server.on('request',(req,res)=>{
    console.log("Received Request")
    res.end(`You've headed over to ${req.url}`)
}) // created emitter

server.listen(8000,'127.0.0.1',()=>{
    console.log("check out http://localhost:8000/")
}) // emitted 
const fs = require("fs")
const server = require("http").createServer()


server.on("request",(req,res)=>{
    const Readable_stream = fs.createReadStream("./test-file.txt")
    Readable_stream.pipe(res)
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("check out http://localhost:8000/")
})
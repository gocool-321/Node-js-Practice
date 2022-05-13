const fs = require('fs')

fs.readFile("./text.txt","utf-8",(err,data)=>{
    console.log("Error is ",err)
    console.log("Here we go: ",data)
})
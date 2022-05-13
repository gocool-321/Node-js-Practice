const fs = require('fs')

const SomeText = "Hey, Here is sometext that I'm gonna write into file..."

fs.writeFile("./Text.txt",SomeText,"utf-8",(err)=>{
    console.log(err);
})
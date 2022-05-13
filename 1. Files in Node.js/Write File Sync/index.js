const fs = require('fs')

const data = "I am Gonna write my name to the file... \nI'm gokul sai"

fs.writeFileSync("./text.txt",data)
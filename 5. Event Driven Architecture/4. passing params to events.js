const event = require("events")

const emitter = new event()

emitter.on("learn",(data)=>{
    console.log("Need to learn this ",data," course")
})

emitter.emit("learn")
emitter.emit("learn","Data Structures")
emitter.emit("learn","MERN")
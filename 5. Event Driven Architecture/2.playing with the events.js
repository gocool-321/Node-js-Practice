const event = require("events")

const emitter = new event()

var count=0

emitter.on("increaseCount",()=>{
    count+=1
})

emitter.on("decreaseCount",()=>{
    count-=1
})

emitter.emit("increaseCount")
emitter.emit("decreaseCount")
emitter.emit("decreaseCount")
console.log(count)
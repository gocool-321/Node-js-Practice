const event = require('events')

const emitter = new event()

emitter.on('learn',()=>{
    console.log("Learning about Node.js")
})

emitter.on('playing',()=>{
    console.log("I love Playing Cricket")
})

emitter.on('music',()=>{
    console.log("I'll listen music on my spotify playlists")
})

emitter.emit("learn")
emitter.emit("playing")
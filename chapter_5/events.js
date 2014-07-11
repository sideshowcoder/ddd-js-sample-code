var events = require("events")
var myEmitter = new events.EventEmitter()

var thing = { count: 0 }

myEmitter.on("change", function () {
  thing.count++
})

function doStuff(thing) {
  thing.count = 10
  process.nextTick(function() {
    doMoreStuff(thing)
  })
}

function doMoreStuff(thing) {
  console.log(thing.count)
}

doStuff(thing)
myEmitter.emit("change")

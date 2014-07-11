var EventEmitter = require("events").EventEmitter
var util = require("util")

function House() {
  EventEmitter.call(this)

  var that = this

  this.pleaseOpen = function() {
    that.emit("ring")
  }
}

util.inherits(House, EventEmitter)

var me = {
  onRing: function(ev) {
            console.log("opening door")
          }
}

var myHouse = new House()
myHouse.on("ring", me.onRing)

myHouse.pleaseOpen()

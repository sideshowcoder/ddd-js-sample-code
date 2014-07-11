MESSAGE_SYSTEM = {
  send: function(target, message) { 
    // this is fake
    return true
  }
}

function Channel(source, target) {
  this.source = source
  this.target = target
}

Channel.prototype.message = function () {
  var message = { from: this.source, message: JSON.stringify(arguments) }
  MESSAGE_SYSTEM.send(this.target, message)
}

module.exports = messages = {
  Channel: function (source, target) {
    return new Channel(source, target)
  }
}

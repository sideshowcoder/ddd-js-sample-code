function ExaggeratingOrc(name) {
  var that = this
  // public property
  that.name = name

  // private property
  var realKills = 0
  // private method
  function killCount() { 
    return realKills + 10
  }

  // public method using private method
  that.greet = function() { 
    console.log("I am " + that.name + " and I killed " + killCount())
  }

  // public method using private property
  that.kill = function() { // public
    realKills = realKills + 1
  }
}

var orc = new ExaggeratingOrc("Axeman Axenson")
orc.greet()
try {
  orc.killCount()
} catch(e) {
  console.log(e)
}

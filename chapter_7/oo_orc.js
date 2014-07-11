var util = require("util")

var Orc = {
  init: function (name, weapon) {
    this.name = name
    this.weapon = weapon
    return this
  },

  get isArmed () { return !!this.weapon },

  attack: function (opponent) {
    console.log(this.name + " strikes "
        + opponent.name + " with " + this.weapon + ".")
  }
}

var Fight = {
  init: function (orc, attacker) {
    this.orc = orc
    this.attacker = attacker
    return this
  },

  round: function () {
     if(this.orc.isArmed) {
       this.orc.attack(this.attacker)
     } else {
       this.attacker.attack(this.orc)
     }
   }
}

var asLoggable = function () {
  Object.keys(this).forEach(function (key) {
    if (this.hasOwnProperty(key) && typeof this[key] === 'function') {
      var that = this
      var fn = this[key]
      this[key] = function () {
        console.log("Called " + key + " on " + util.inspect(that) + " with " + util.inspect(arguments))
        return fn.apply(that, arguments)
      }
    }
  }, this)
  return this
}

var agronak = Object.create(Orc).init("Agronak", "sword")
var traugh = Object.create(Orc).init("Traugh")

var LoggableFight = asLoggable.call(Fight)
var fight = Object.create(LoggableFight).init(agronak, traugh)
fight.round()


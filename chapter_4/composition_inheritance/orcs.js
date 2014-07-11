var Master = function (guards) {
    this.guards = guards
}

Master.prototype.fightOfAttackers = function (attackers) {
  var self = this
  attackers.forEach(function (attacker, idx) {
    console.log(self.guards[idx].kill(attacker))
  })
}

var axeMaster = {
  kill: function(name) { return "Hack " + name; }
}

var swordMaster = {
  kill: function(name) { return "Slash " + name; }
}

var master = new Master([axeMaster, swordMaster])
master.fightOfAttackers(["goblin", "human"])


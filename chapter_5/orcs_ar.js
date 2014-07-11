var AVAILABLE_WEAPONS = [ "axe", "axe", "sword" ]
var NAMES = [ "Ghazat", "Waruk", "Zaraugug", "Smaghed", "Snugug",
              "Quugug", "Torug", "Zulgha", "Guthug", "Xnath" ]

function Orc(weapon, rank, name) {
  this.weapon = weapon
  this.rank = rank
  this.name = name
}

Orc.anonymusArmedGrunt = function () {
  var randomName = NAMES[Math.floor(Math.random() * NAMES.length)]
  var weapon = AVAILABLE_WEAPONS.pop()
  return new Orc(weapon, "grunt", randomName)
}

console.log(Orc.anonymusArmedGrunt())
console.log(Orc.anonymusArmedGrunt())

function Orc(age) {
  this.age = age
  this.attacking = false
}

Orc.prototype.goToBattle = function () {
  if (this.age < 18) throw new Error("To young for battle")
  this.attacking = true
}

var orc = new Orc(21)
var youngOrc = new Orc(16)

try {
  console.log("Orc is attacking: " + orc.attacking)
  orc.goToBattle()
  console.log("Orc is attacking: " + orc.attacking)
} catch (e) {
  console.log(e)
}
try {
  console.log("Orc is attacking: " + youngOrc.attacking)
  youngOrc.goToBattle()
  console.log("Orc is attacking: " + youngOrc.attacking)
} catch (e) {
  console.log(e)
}

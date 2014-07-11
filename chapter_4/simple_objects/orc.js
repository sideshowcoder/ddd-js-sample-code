function Orc(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Orc.prototype.fullName = function () {
  return this.firstName + " " + this.lastName
}

var orc = new Orc("Gnarr", "Nargo")
console.log(orc.fullName())

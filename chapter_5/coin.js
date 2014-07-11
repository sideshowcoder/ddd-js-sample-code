"use strict"

function Coin(value) {
  this.value = value
  Object.freeze(this)
}

Coin.prototype.equals = function(other) {
  if(!(other instanceof Coin)) {
    return false
  }

  return this.value === other.value
}

var notACoin = { value: 50 }
var tenCoin = new Coin(10)
var fiftyCoin = new Coin(50)
var otherFiftyCoin = new Coin(50)

try {
  tenCoin.value = 20
} catch(e) {
  console.log(e)
}

console.log("compare two coins using == " + (fiftyCoin == otherFiftyCoin))
console.log("compare two coins using equals " + fiftyCoin.equals(otherFiftyCoin))
console.log("compare two different coins using equals " + fiftyCoin.equals(tenCoin))
console.log("compare coin and not coin using equals " + fiftyCoin.equals(notACoin))

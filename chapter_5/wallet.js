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

function Wallet(coins) {
  this.money = coins
}

Wallet.prototype.pay = function (coin) {
  for(var i = 0; i < this.money.length; i++) {
    if (this.money[i].equals(coin)) {
      this.money.splice(i, 1)
      return true
    }
  }
  return false
}

function Orc(wallet) {
  this.wallet = wallet
  this.inventory = []
}

Orc.prototype.buy = function (thing, price) {
  var priceToPay = new Coin(price)
  if (this.wallet.pay(priceToPay)) {
    this.inventory.unshift(thing)
    return true
  }
  return false
}

var ten = new Coin(10)
var wallet = new Wallet([ten])
var orc = new Orc(wallet)
console.log(orc)
orc.buy("axe", 10)
console.log(orc)

"use strict"

function Coin(value) {
  this.value = value
  Object.freeze(this)
}

Coin.prototype.equals = function(other) {
  if(other.__proto__ !== this.__proto__) {
    return false
  }

  return this.value === other.value
}

var notACoin = { value: 50 }
var aCoin = new Coin(50)
var coin = new Coin(50)

coin.equals(aCoin) // => true
coin.equals(notACoin) // => false


function Wallet(coins) {
  this.money = coins
}

Wallet.prototype.pay = function (coin) {
  for(var i = 0; i < this.money.length; i++) {
    if (this.money[i].equals(coin) {
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


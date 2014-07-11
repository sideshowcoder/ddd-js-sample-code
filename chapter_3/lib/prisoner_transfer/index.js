function PrisonerTransfer(carriage, keeper, prisoner) {
  this.carriage = carriage
  this.prisoner = prisoner
  this.keeper = keeper
}

PrisonerTransfer.prototype.movePrisoner = function (source, target, callback) {
  source.freeFromCell(this.prisoner)
  target.inPrison(this.prisoner)
  callback()
}



module.exports = prisonerTransfer = function (prisoner, otherDungeon, ourDungeon, notifier, callback) {
  var keeper = ourDungeon.getOrc()
  var carriage = ourDungeon.getCarriage()
  var transfer = prepareTransfer(carriage, keeper, prisoner)
  if (transfer) {
    notifier.message(transfer)
    transfer.movePrisoner(ourDungeon, otherDungeon, callback)
  } else {
    callback(new Error("Transfer initiation failed."))
  }
}

function prepareTransfer(carriage, keeper, prisoner) {
  return new PrisonerTransfer(carriage, keeper, prisoner)
}


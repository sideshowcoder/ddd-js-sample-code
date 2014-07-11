module.exports = prisonerTransfer = function (prisoner, otherDungeon, ourDungeon, notifier, callback) {
  var keeper = ourDungeon.getOrc()
  var carriage = ourDungeon.getCarriage()
  var transfer = prepareTransfer(carriage, keeper, prisoner)
  if (transfer) {
    notifier.message(dungeon, transfer)
    callback()
  } else {
    callback(new Error("Transfer initiation failed."))
  }
}

function prepareTransfer(carriage, keeper, prisoner) {
  return {}
}

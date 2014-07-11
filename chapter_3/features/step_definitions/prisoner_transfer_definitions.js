var prisonerTransfer = require("../../lib/prisoner_transfer")
var dungeon = require("../../lib/dungeon")
var prisoner = require("../../lib/inmates")
var messages = require("../../lib/messages")
var assert = require("assert")

module.exports = function () {
  this.Given(/^I have a prisoner ready to transfer to another dungeon$/, function (callback) {
    this.prisoner = inmates.Prisoner()
    this.remoteDungeon = dungeon.remoteDungeon()
    this.localDungeon = dungeon.localDungeon()
    this.localDungeon.inPrison(this.prisoner)
    this.channel = messages.Channel(this.localDungeon, this.remoteDungeon)
    callback()
  })

  this.When(/^I initiate the transfer$/, function (callback) {
    prisonerTransfer(this.prisoner,
                     this.remoteDungeon,
                     this.localDungeon,
                     this.channel,
                     callback)
  })

  this.Then(/^the other dungeon should receive the prisoner$/, function (callback) {
    assert(this.remoteDungeon.hasPrisoner(this.prisoner))
    callback()
  })
}

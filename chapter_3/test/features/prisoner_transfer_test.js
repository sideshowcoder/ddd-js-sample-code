var prisonerTransfer = require("../../lib/prisoner_transfer")
var dungeon = require("../../lib/dungeon")
var prisoner = require("../../lib/inmates")
var messages = require("../../lib/messages")
var assert = require("assert")

describe("Prisoner transfer to other dungeons", function () {
  /*
   * As the dungeon I want to have prisoner transfers to be an automated
   * process. After initiation the transfer should take the necessary steps to
   * complete, and prompt for any additional information needed
   */

  it("prisoner is moved to remote dungeon", function (done) {
    var prisoner = inmates.Prisoner()
    var remoteDungeon = dungeon.remoteDungeon()
    var localDungeon = dungeon.localDungeon()
    localDungeon.inPrison(prisoner)
    var channel = messages.Channel(localDungeon, remoteDungeon)

    assert(localDungeon.hasPrisoner(prisoner))
    prisonerTransfer(prisoner, remoteDungeon, localDungeon, channel, function (err) {
      assert.ifError(err)
      assert(remoteDungeon.hasPrisoner(prisoner))
      assert(!localDungeon.hasPrisoner(prisoner))
      done()
    })
  })
})

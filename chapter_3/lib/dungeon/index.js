var DUNGEONS = { }

function Dungeon(id) {
  this.id = id
  this.prisoners = []
}

Dungeon.prototype.inPrison = function (prisoner) {
  this.prisoners.push(prisoner)
}

Dungeon.prototype.freeFromCell = function (prisoner) {
  this.prisoners.splice(this.prisoners.indexOf(prisoner), 1)
}

Dungeon.prototype.hasPrisoner = function (prisoner) {
  return this.prisoners.indexOf(prisoner) !== -1
}

Dungeon.prototype.getOrc = function () {
  // TODO fake for now
  return {}
}

Dungeon.prototype.getCarriage = function () {
  // TODO fake for now
  return {}
}

Dungeon.find = function (id) {
  return DUNGEONS[id]
}

Dungeon.create = function (id) {
  return DUNGEONS[id] = new Dungeon(id)
}

module.exports = dungeon = {

  remoteDungeon: function () {
    return Dungeon.find("remote") || Dungeon.create("remote")
  },

  localDungeon: function () {
    return Dungeon.find("local") || Dungeon.create("local")
  }
}

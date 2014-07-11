 var dungeons = {}
 var DEFAULT_CELLS = 100

var Dungeon = function(cells) {
  this.cells = cells
  this.bookedCells = 0
}

Dungeon.prototype = {
  get free() {
    return this.cells - this.bookedCells
  }
}

Dungeon.prototype.book = function(number) {
  this.bookedCells += number
}

Dungeon.prototype.unbook = function(number) {
  this.bookedCells -= number
}

Dungeon.find = function(id, cb) {
  if(!dungeons[id]) {
    dungeons[id] = new Dungeon(DEFAULT_CELLS)
  }

  cb(null, dungeons[id])
}

module.exports = Dungeon

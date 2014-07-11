var Dungeon = require('../models/dungeon')

module.exports = function(req, res, next) {
  req.context = req.context || {}
  Dungeon.find('main', function(err, dungeon) {
    req.context.dungeon = dungeon
    next()
  })
}

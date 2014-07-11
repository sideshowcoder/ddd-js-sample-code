var routes = module.exports = {
  index: function(req, res){
    res.render('index', req.context)
  },

  cells: {
    book: function(req, res){
      var dungeon = req.context.dungeon
      var cells = parseInt(req.body.cells)
      if (req.body.book) {
        dungeon.book(cells)
      } else {
        dungeon.unbook(cells)
      }

      res.redirect('/')
    }
  }
}

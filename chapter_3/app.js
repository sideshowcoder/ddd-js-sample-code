var express = require('express')
var routes = require('./routes')
var http = require('http')
var path = require('path')

var app = express()

app.configure(function(){
  app.set('port', process.env.PORT || 3000)
  app.set('views', __dirname + '/views')
  app.set('view engine', 'ejs')
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.methodOverride())

  app.use(app.router)
})

app.configure('development', function(){
  app.use(express.errorHandler())
})

// handle prisoner transfer
var prisonerTransfer = require("lib/prisoner_transfer")
app.post("/prisoner_transfer", function(req, res) {
  var dungeon = Dungeon.findById(req.params.dungeonId)
  var prisoner = Prisoner.findById(req.params.prisonerId)

  prisonerTransfer(prisoner, dungeon, function(err) {
    var message
    if(err) {
      res.statusCode = 400
      message = { error: err.message }
    } else {
      res.statusCode = 201
      message = { success: true }
    }
    res.end(JSON.stringify(message))
  })
})


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'))
})

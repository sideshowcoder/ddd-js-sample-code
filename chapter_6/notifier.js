var sinon = require("sinon")
var util = require("util")

var connection = {
  send: function (message) {
    console.log("sending: " + util.inspect(message))
    // do some work
  },
  close: function () {
    // do some work
  }
}
var backend = {
  connectTo: function (target, cb) {
    cb(null, connection)
  }
}

function Notifier(backend) {
  this.backend = backend
}

function createMessageFromSubject(subject) {
  return { message: "this is a message" }
}

Notifier.prototype.message = function (target, subject, cb) {
  var message = createMessageFromSubject(subject)
  backend.connectTo(target, function (err, connection) {
    connection.send(message)
    connection.close()
    cb()
  })
}

describe("Notifier", function () {
  it("calls the backend and sends a message", function () {
    var backendMock = sinon.mock(backend)
    backendMock.expects("connectTo").once()

    var notifier = new Notifier(backendMock)
    var dungeon = {}
    var transport = {}
    notifier.message(dungeon, transport, function (err) {
      mock.verify()
    })
  })
})

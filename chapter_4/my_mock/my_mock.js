var assert = require("assert")

var myMock = {
  called: false,
  aFunction: function () { myMock.called = true }
}

function test_my_mock() {
  var mock = Object.create(myMock) // called on the mock is false
  mock.aFunction()
  assert(mock.called) // called on the mock is true
}

test_my_mock()

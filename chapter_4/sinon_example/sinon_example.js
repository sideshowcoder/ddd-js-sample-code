var sinon = require("sinon")

var anApi = {
  foo: function () {
         return "123"
       }
}

describe("Implementing an API", function () {
  it("is a mock", function () {
    var mock = sinon.mock(anApi)
    mock.expects("foo").once()

    anApi.foo()
    mock.verify()
  })
})

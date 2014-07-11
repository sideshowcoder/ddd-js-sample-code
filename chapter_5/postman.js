var util = require("util")

var postman = {
  deliver: function (letter) {
    console.log("delivering: " + util.inspect(letter))
    // do some work
  }
}

function LetterSender(postman, letter) {
  this.postman = postman
  this.letter = letter
}

LetterSender.prototype.send = function() {
  var address = this.letter.to
  this.postman.deliver(letter, address)
}

function Letter(title, text, to) {
  this.title = title
  this.text = text
  this.to = to
}

Letter.prototype.send = function(postman) {
  postman.deliver(this)
}

var letter = new Letter("Some title", "a description", "me@example.com")
console.log("Sending via letter.send")
letter.send(postman)

console.log("Sending via LetterSender")
var letterSender = new LetterSender(postman, letter)
letterSender.send()

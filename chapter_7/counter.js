var counter = {
  state: 1,
  update: function() {
    this.state++
  }
}

var jumpingCounter = Object.create(counter, {
  update: { value: function() { this.state += 10 } }
})

console.log("counter before " + jumpingCounter.state)
jumpingCounter.update()
console.log("counter after " + jumpingCounter.state)

var thing = {
  state: 1,
  update: function() {
    this.state++
  }
}

console.log("state before " + thing.state)
thing.update()
thing.update()
console.log("state after " + thing.state)

var otherThing = Object.create(thing, {
  more: { value: "data" }
})

otherThing.update()
thing.update()

console.log("state other thing " + otherThing.state)
console.log("more other thing " + otherThing.more)

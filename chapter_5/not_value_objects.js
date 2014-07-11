function iChangeThings(obj) {
  obj.thing = "changed"
}

obj = {}

console.log("obj.thing value: " + obj.thing)
iChangeThings(obj)
console.log("obj.thing value: " + obj.thing)

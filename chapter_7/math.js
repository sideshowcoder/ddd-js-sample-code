var numbers = [1,2,3,4,5,6]

for(var i = numbers.length-1, si = numbers[i], s = 0; si = numbers[i--];) s += si
console.log("sum for " + numbers + " is " + s)

sum = numbers.reduce(function (a, b) { return a + b }, 0)
console.log("sum for " + numbers + " is " + sum)

var result = numbers.map(function(number) {
  return (number * 2)
}).filter(function(e) {
  return (e % 2) === 0
}).reduce(function(acc, val) {
  return acc + val
})

console.log("calculation result: " + result)

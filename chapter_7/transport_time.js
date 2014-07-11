var SATURDAY = 6
var SUNDAY = 7

var days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

var transportTime = 11

var arrivalDay = days.filter(function (e) {
  if (e % SATURDAY === 0) return false
  if (e % SUNDAY === 0) return false
  return true
})[transportTime]

console.log(arrivalDay)

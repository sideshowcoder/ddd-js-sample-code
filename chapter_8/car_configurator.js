function Configurator(model) {
  this.model = model
  this.options = []
  this.engineConstraints = []
}

Configurator.prototype.bodyType = function (option) {
  this.options.push(option)
}

Configurator.prototype.engine = function (option) {
  this.options.push(option)
}

Configurator.prototype.addExtra = function (option) {
  this.options.push(option)
}

Configurator.prototype.errors = function () {
  var errors = { conflicts: [] }
  var that = this
  this.engineConstraints.forEach(function (constraint) {
    if (that.options.indexOf(constraint.target) !== -1) {
      constraint.matches.forEach(function (match) {
        if (that.options.indexOf(match) !== -1) {
          errors.conflicts.push(match)
        }
      })
    }
  })
  return errors
}

function Car() { }

function Contstraint(target) {
  this.target = target
  this.matches = Array.prototype.slice.call(arguments, 1)
}

var Engines = { V8: "v8", V6: "v6", V6_6L: "v6_6" }
var BodyTypes = { CONVERTIBLE: "convertible" }
var Extras = { RADIO: "radio", GPS: "gps" }

var car = new Car()
var configurator = new Configurator(car)

configurator.engineConstraints = [ new Contstraint(BodyTypes.CONVERTIBLE, Engines.V8, Engines.V6) ]

configurator.bodyType(BodyTypes.CONVERTIBLE)
configurator.engine(Engines.V6)
configurator.addExtra(Extras.RADIO)
configurator.addExtra(Extras.GPS)

console.log(configurator.errors())


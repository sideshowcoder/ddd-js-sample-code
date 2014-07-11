function Notifications(store) {
  if (typeof(store) === 'undefined') {
    this.store = []
  } else {
    this.store = store
  }
}

Notifications.prototype.add = function (notification) {
  this.store.push(notification)
}

var notifications = new Notifications()
notifications.add("something happend")
console.log(notifications.store)


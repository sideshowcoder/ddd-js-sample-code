window.App = Ember.Application.create()

App.Orc = Ember.Object.extend({
  name: "Garrazk"
})

App.Router.map(function () {
  this.route('index', { path: '/' })
})

var orc

App.IndexRoute = Ember.Route.extend({
  templateName: 'orc',
  controllerName: 'orc',
  model: function() {
    if(!orc) orc = App.Orc.create();
    return orc
  }
});

var names = [ "Yahg", "Hibub", "Crothu", "Rakgu", "Tarod", "Xoknath", "Gorgu", "Olmthu", "Olur", "Mug" ]

App.OrcController = Ember.ObjectController.extend({
  actions: {
    rename: function () {
      var newName = names[Math.floor(Math.random()*names.length)];
      this.set("name", newName)
    }
  }
})

var app = app || {}

app.Recipe = Backbone.Model.extend({
	idAttribute: "_id",
  initialize: function() {
    this.on( "add", this.test)
  },
  test: function(){
    //alert('added model')
  }
});

app.recipe = new app.Recipe();

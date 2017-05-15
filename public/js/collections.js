var app = app || {}

app.RecipesCollection = Backbone.Collection.extend({
	model: app.Recipe,
	url: '/api/recipe',
  initialize: function() {
    this.on( "add", this.test)
  },
  test: function(){
    // alert('added')
  }
});
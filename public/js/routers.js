var app = app || {}

app.singleRecipeModel = null;

app.recipesRoutes = Backbone.Router.extend({
  container: null,
  view1: null,

  routes: {
    "": "mainPage",
    "getRecipe/:id": "getRecipe"
    }
});

// Initiate the router
var app_router = new app.recipesRoutes;

app.Recipes = null;
app_router.on('route:mainPage', function() {
  console.log("main page");

  app.recipes = new app.RecipesCollection();
  app.recipes.fetch({
    success: function (collection, response, options) {
      var list = new app.recipesListView();
      list.render();
    },
    error: function (collection, response, options) {
      console.log('Ой ой');
    }
  });
});

app_router.on('route:getRecipe', function(id) {
  console.log("selected:", id);

  var recipes = new app.RecipesCollection();
  var singleRecipe = new app.Recipe({id: id});

  singleRecipe.collection = recipes;
  singleRecipe.fetch({
      success: function (collection, response, options) {
        app.singleRecipeModel = collection;

        var recipe = new app.singleRecipeView();
        recipe.render();
      },
      error: function (collection, response, options) {
        console.log('Ой ой');
      }
    });
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
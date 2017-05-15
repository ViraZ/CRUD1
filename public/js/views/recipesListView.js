// recipes list
var app = app || {}

app.recipesListView = Backbone.View.extend({
    tagName: "ul",
    id: "recipesList",
    model: "",

    initialize: function () {
        this.model = app.recipes;

        this.listenTo(this.model, 'clear', this.listChanged);
        this.listenTo(this.model, 'reset', this.render);
    },

    listChanged: function(){
        $("#page").empty();
        this.model.fetch({reset: true});
    },

    render: function() {
        console.log("RENDER Recipes List");

        // First - make sure the list is empty
        this.$el.empty()

        for (var i = 0; i < this.model.length; ++i) {
            // lets create a recipe view to render
            var recipeView = new app.recipeView({
                model: this.model.at(i)
            });

            // lets add this recipe view to this list view
            this.$el.append(recipeView.$el);
            recipeView.render(); // lets render the recipe
        }

        // Put whole list to #page
        $("#page").html(this.$el);

        return this;
    }
});
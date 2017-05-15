// Single Recipe view
var app = app || {}

app.singleRecipeView = Backbone.View.extend({
    tagName: "div",
    id: "recipeInfo",
    model: "",
    template: "",

    initialize: function() {
        this.model = app.singleRecipeModel;
        this.template = _.template($('#singleRecipeItem').html());
    },

    events: {
        "click .delete": 'deleteRecipe'
    },

    deleteRecipe: function () {
        this.model.destroy({success: function(model, response) {
            debugger;
        }});
    },

    render: function() {
        console.log("RENDER Single Recipe");
        this.$el.html(this.template(this.model.attributes[0]));
        $("#page").html(this.$el);
        return this;
    }
});
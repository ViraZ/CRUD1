var app = app || {}

// One recipe
app.recipeView = Backbone.View.extend({
    model: app.recipe,
    tagName: 'li',
    template: '',
    className: 'recipe',

    initialize: function() {
        this.template = _.template($('#recipeItem').html());
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});

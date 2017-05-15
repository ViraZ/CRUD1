var app = app || {}

// Add new Recipe form view
app.recipeFormView = Backbone.View.extend({
    el: '#newRecipe',
    template: '',
    initialize: function() {
        this.template = _.template($('#newRecipeForm').html());
    },
    events: {
        'submit form': 'saveRecipe'
    },
    saveRecipe: function (e) {
        e.preventDefault();

        var data = {
            title: e.target.title.value,
            year: e.target.year.value,
            thumbnail: e.target.thumbnail.value
        };
        console.log('Data:', data)

        app.recipes.create(data, {
            success: function(model){
                console.log('Recipe added!');
                app.recipes.trigger('clear');
            }
        });
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

var form = new app.recipeFormView();
form.render();
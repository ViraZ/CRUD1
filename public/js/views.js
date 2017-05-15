// recipes
var recipesListView = Backbone.View.extend({
    el: 'ul',
    model: Recipe,

    render: function() {
        this.$el.html(); // lets render this view
        
        for(var i = 0; i < this.model.length; ++i) {
            // lets create a book view to render
            var m_bookView = new recipeView({
                model: this.model.at(i)
            });

            // lets add this book view to this list view
            this.$el.append(m_bookView.$el); 
            m_bookView.render(); // lets render the book           
        } 

         return this;
    },
});


// One recipe
var recipeView = Backbone.View.extend({
    model: Recipe,
    tagName: 'li',
    template: '',

    initialize: function() {
        this.template = _.template($('#recipeItem').html());
    },

    render: function() {
        // this.$el.html(this.template(this.model.attributes));
        // return this;
    }
});


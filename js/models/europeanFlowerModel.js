var app = app || {};

app.europeanFlower = Backbone.Model.extend({
    initialize: function() {
        this.on('change', function(){
            console.log("Something in our model is changed");
        });

    }
});
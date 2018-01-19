var app = app || {};

app.allStateFlowerView = Backbone.View.extend({
    tagName: "section",
    render: function() {
        this.collection.each(this.addFlower,this);
        return this;
    },
    addFlower: function(stateFlower) {
        var flowerView = new app.stateFlowerView({
            model: stateFlower
        });
        this.$el.append(flowerView.render().el);
    }
});
var app = app || {};

app.stateFlowerView = Backbone.View.extend({
    tagName: "article",
    className: "flowerListItem",
    template: _.template( $("#stateFlowerElement").html() ),
    render: function(){
        var stateFlowerTemplate = this.template(this.model.toJSON());
        this.$el.html(stateFlowerTemplate);
        return this;
    }
});
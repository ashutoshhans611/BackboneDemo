var app = app || {};

app.singleFlowerView = Backbone.View.extend({
    tagName: "article",
    className: "flowerListItem",
    template: _.template( $("#flowerElement").html() ),
    render: function() {
        var flowerTemplate = this.template(this.model.toJSON());
        this.$el.html(flowerTemplate);
        return this;
    },
    events: {
        "mouseover": 'addBgcolor',
        "mouseout": 'removeBgcolor',
    },
    addBgcolor: function(){
        this.$el.addClass("bgColorImage");
    },
    removeBgcolor: function(){
        this.$el.removeClass("bgColorImage");
    }
});
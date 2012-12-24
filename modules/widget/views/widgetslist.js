define(
    ['backbone', 'text!modules/widget/templates/widgetslist.tpl'],
    function(Backbone, widgetsListTpl) {
        return Backbone.View.extend({
            tagName: 'div',
            className: 'well sidebar-nav',
            error: function(model, error) {
                console.log(model, error);
                return this;
            },
            events : {
            },
            render: function() {
                this.$el.html(_.template(widgetsListTpl ,{widgets : this.collection.toJSON()}));
                console.log(this.$el[0]);
                return this;
            }
        });
    }
);

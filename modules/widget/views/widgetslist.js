define(
    ['backbonetastypie', 'text!templates/widgetslist.tpl'],
    function(Backbone, tplWidgetsList) {
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
                this.$el.html(_.template(tplWidgetsList).template({ widgets : this.collection.toJSON()}));
                return this;
            }
        });
    }
);

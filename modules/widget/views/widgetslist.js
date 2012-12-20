define(
    ['backbonetastypie', 'text!modules/widget/templates/widgetslist.tpl'],
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
                this.$el.html(_.template(widgetsListTpl).template({ widgets : this.collection.toJSON()}));
                return this;
            }
        });
    }
);

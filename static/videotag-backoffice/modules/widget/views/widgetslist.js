define(
    ['backbone', 'text!modules/widget/templates/widgetslist.tpl'],
    function(Backbone, widgetsListTpl) {
        'use strict';
        return Backbone.View.extend({
            el: '.widgetslist',
            tagName: 'div',
            className: 'well sidebar-nav',
            error: function(model, error) {
                console.log(model, error);
                return this;
            },
            render: function() {
                this.$el.html(_.template(widgetsListTpl ,{widgets : this.collection.toJSON()}));
                return this;
            }
        });
    }
);

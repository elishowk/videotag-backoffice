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
            events: {
                'click .previous': 'prvs',
                'click .next': 'nxt'
            },
            prvs: function(){
                if (this.collection.meta.previous == null)return;
                this.collection.fetchPrevious({
                    success: function(){
                        this.render();
                    }.bind(this)
                });
            },
            nxt: function() {
                if (this.collection.meta.next == null)return;
                this.collection.fetchNext({
                    success: function(){
                        this.render();
                    }.bind(this)
                });
            },
            render: function() {
                this.$el.html(_.template(widgetsListTpl ,{
                    widgets : this.collection.toJSON(),
                    next: this.collection.meta.next,
                    previous: this.collection.meta.previous}));
                return this;
            }
        });
    }
);

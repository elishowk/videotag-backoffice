define(
    ['backbone', 'text!modules/widget/templates/widget.tpl'  ],
    function(Backbone, tplWidget) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            events: {
                'click #btn-unpublish':'unpublish',
                'click #btn-publish':'publish'
            },
            render: function() {
                this.$el.html(_.template(tplWidget).template(this.model.toJSON));
                return this;
            },
            publish: function(){
                this.collection.get(this.$('#btn-publish').attr('widget-id')).save({'publish': true});
            },
            unpublish: function(){
                this.collection.get(this.$('#btn-unpublish').attr('widget-id')).save({'publish': false});
            }
        });
    });

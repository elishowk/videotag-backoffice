define(
    ['backbone', 'text!modules/widget/templates/widget.tpl', 'text!modules/widget/templates/snippet.tpl'  ],
    function(Backbone, tplWidget, tplSnippet) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            events: {
                'click #btn-unpublish':'unpublish',
                'click #btn-publish':'publish'
            },
            render: function() {
                this.$el.html(_.template(tplWidget, this.model.toJSON()));
                $.get('http://localhost:9000/poser/'+ this.model.get('path'), function(data){
                    this.$el.find('.snippet').text(_.template(tplSnippet, data));
                }.bind(this));
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

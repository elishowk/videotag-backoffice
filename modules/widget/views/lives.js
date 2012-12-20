define(
    ['backbonetastypie', 'text!modules/widget/templates/lives.tpl'/*TODO: lib timedatepicker */  ],
    function(Backbone, tplLives) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            events: {
                'click #btn-addlive': 'addlive',
                'click #btn-dellive': 'dellive'
            },
            addlive : function(e) {
                e.preventDefault();
            },
            dellive : function(e) {
                e.preventDefault();
            },
            render : function() {
                this.$el.html(_.template(tplLives).template({ lives : this.collection.toJSON()}));
                this.$el.find('#datepicker').datepicker();
                this.$el.find('#timepicker').timepicker();
                return this;
            }
        });
    }
);

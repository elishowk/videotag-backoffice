define(
    ['backbone', 'text!modules/widget/templates/lives.tpl', 'bootstrap-datepicker', 'bootstrap-timepicker' ],
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
                this.collection.add({start : this.$('#datepicker').val()+ 'T'+ this.$('#timepicker').val() });
            },
            dellive : function(e) {
                e.preventDefault();
            },
            render : function() {
                this.$el.html(_.template(tplLives, { lives : this.collection.toJSON()}));
                this.$el.find('#datepicker').datepicker({format: 'yyyy-mm-dd'});
                this.$el.find('#timepicker').timepicker({ showSeconds: true, showMeridian:false });
                return this;
            }
        });
    }
);

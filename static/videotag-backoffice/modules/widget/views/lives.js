define(
    ['backbone', 'modules/widget/templates/lives.tpl', 'bootstrap-datepicker', 'bootstrap-timepicker', 'jquery-validation'],
    function(Backbone, tplLives) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            className: 'span4',
            events: {
                'click .deleteLive': 'dellive',
            },
            addlive : function(e) {
            },
            dellive : function(e) {
                e.preventDefault();
                console.log('toto');
                this.collection.getById(e.target.name).destroy();
                this.collection.remove(this.collection.getById(e.target.name));
                window.location.reload();
            },
            render : function() {
                var that = this;
                this.$el.html(_.template(tplLives, { lives : this.collection.toJSON()}));
                this.$el.find('#datepicker').datepicker({format: 'yyyy-mm-dd'});
                this.$el.find('#timepicker').timepicker({ showSeconds: true, showMeridian:false });
                this.$el.find('#formAddLive').validate({
                    rules: {
                        time: {
                            required: true,
                        },
                        date: {
                            required: true,
                        }
                    },
                    highlight: function(label) {
                        that.$el.find(label).closest('.control-group').addClass('error');
                    },
                    success: function(label) {
                        label
                        .text('OK!').addClass('valid')
                        .closest('.control-group').addClass('success');
                    },
                    submitHandler: function(form) {
                that.collection.add({start : that.$el.find('#datepicker').val()+ 'T'+ that.$el.find('#timepicker').val() });
                 that.$el.find('#liveModal').modal('hide');
                    }
                });

                return this;
            }
        });
    }
);

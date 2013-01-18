define(
    ['backbone', 'modules/user/templates/melomaniac.tpl', 'jquery-validation', 'bootstrap-datepicker'],
    function(Backbone, tplMelomaniac) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            error : function(model, error) {
                console.log(model, error);
                return this;
            },
            render : function() {
                var that = this;
                this.$el.html(_.template(tplMelomaniac,  this.model.toJSON()));
                this.$el.find('#birth_date').datepicker({format: 'yyyy-mm-dd'});
                this.$el.find('#formMelomaniac').validate({
                    rules: {
                    },
                    highlight: function(label) {
                        that.$el.find(label).closest('.control-group').removeClass('success');
                        that.$el.find(label).closest('.control-group').addClass('error');
                    },
                    success: function(label) {
                        that.$el.find(label).closest('.control-group').removeClass('error');
                        label
                        .text('OK!').addClass('valid')
                        .closest('.control-group').addClass('success');
                    },
                    submitHandler: function(form) {
                        that.model.set({
                            phone: that.$el.find('#phone').val(),
                            website: that.$el.find('#website').val(),
                            about_me: that.$el.find('#about_me').val(),
                            city: that.$el.find('#city').val(),
                            country: that.$el.find('#country').val(),
                            gender: that.$el.find('#gender').val()
                        },
                        {error : _.bind(that.error, that) });
                        that.model.save();
                        window.location.reload();
                    }
                });
                return this;
            }
        });
    }
);

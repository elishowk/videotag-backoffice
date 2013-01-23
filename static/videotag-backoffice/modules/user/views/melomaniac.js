define(
    ['backbone', 'modules/user/templates/melomaniac.tpl', 'jquery-validation'],
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
                            tel: that.$el.find('#tel').val(),
                            website: that.$el.find('#website').val(),
                            about_me: that.$el.find('#about_me').val(),
                            address1: that.$el.find('#address').val(),
                            city: that.$el.find('#city').val(),
                            country: that.$el.find('#country').val(),
                            zipcode: that.$el.find('#zipcode').val(),
                            facebook: that.$el.find('#facebook').val(),
                            twitter: that.$el.find('#twitter').val(),
                        },
                        {error : _.bind(that.error, that) });
                        that.model.save({},{ success: function(){ window.location.reload();}});
                    }
                });
                return this;
            }
        });
    }
);

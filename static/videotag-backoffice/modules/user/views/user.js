define(
    ['backbone', 'modules/user/templates/user.tpl', 'jquery-validation'],
    function(Backbone, tplUser) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            events: {
                'submit form' : 'updateUser',
            },
            updateUser: function(e) {
                e.preventDefault();
            },
            error : function(model, error) {
                console.log(model, error);
                return this;
            },
            render : function() {
                var that=this;
                this.$el.html(_.template(tplUser,  this.model.toJSON()));
                this.$el.find('#formUser').validate({
                    rules: {
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
                        that.model.set({
                            username : that.$el.find('#username').val(),
                            first_name : that.$el.find('#first_name').val(),
                            last_name : that.$el.find('#last_name').val(),
                            email : that.$el.find('#email').val()
                        },
                        {error : _.bind(that.error, that) });
                        that.model.save();
                        alert("Vos informations ont été modif")
                    }
                });
                return this;
            }
        });
    });

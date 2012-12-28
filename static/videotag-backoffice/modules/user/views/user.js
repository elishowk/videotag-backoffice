define(
    ['backbone', 'text!modules/user/templates/user.tpl', 'backbone-validation'],
    function(Backbone, tplUser) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            events: {
                'submit form' : 'updateUser',
                'keyup' : 'validate'
            },
            updateUser: function(e) {
                e.preventDefault();
                this.model.set({
                    username : this.$('#username').val(),
                    first_name : this.$('#first_name').val(),
                    last_name : this.$('#last_name').val(),
                    email : this.$('#email').val()
                },
                {error : _.bind(this.error, this) });
                this.model.save();
            },
            error : function(model, error) {
                console.log(model, error);
                return this;
            },
            render : function() {
                this.$el.html(_.template(tplUser,  this.model.toJSON()));
                Backbone.Validation.bind(this);
                return this;
            }
        });
    });

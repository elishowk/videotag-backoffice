define(
    ['backbone', 'text!modules/widget/templates/signin.tpl'],
    function(Backbone, tplSignin) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            events : {
               'click #btn-login' : 'login'
            },
            render : function() {
                this.$el.html(_.template(tplSignin}));
                return this;
            }
        });
    }
);

define(
    ['backbone', 'text!modules/user/templates/signin.tpl'],
    function(Backbone, tplSignin, App, UserModel) {
        'use strict';
        return Backbone.View.extend({
            initialize: function(refuser ){
                this.refuser= refuser;
            },
            tagName: 'div',
            render : function() {
                this.$el.html(_.template(tplSignin));
                return this;
            }
        });
    }
);

define(['backbonetastypie', 'text!templates/user.tpl'], function(Backbone, Tpl) {
    return Backbone.View.extend({
        initialize : function() {
            this.template = _.template(Tpl);
            Backbone.Validation.bind(this);
        },

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

        render : function(spinner) {
        }
    });
});

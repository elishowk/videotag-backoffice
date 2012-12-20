define(['backbone', 'text!templates/melomaniac.tpl'], function(Backbone, Tpl) {

    return Backbone.View.extend({

        initialize : function() {
            this.template = _.template(Tpl);
            Backbone.Validation.bind(this);
        },

        events :{
            'submit form' : 'updateMelomaniac',
            'keyup' : 'validate'
        },

        updateMelomaniac : function(e) {
            e.preventDefault();

            this.model.set({
                phone: this.$('#phone').val(),
                website: this.$('#website').val(),
                about_me: this.$('#about_me').val(),
                city: this.$('#city').val(),
                country: this.$('#country').val(),
                gender: this.$('#gender').val()
            },{
                error : _.bind(this.error, this)
            });

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
